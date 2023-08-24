import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import { getFormErrors } from "../../utils/formUtil";
import { useQuery } from "../../hooks/useQuery";
import { userDataAtom } from "../../atom/authAtom";

const defaultFormData = {
  email: "",
  password: "",
  errors: {
    email: "",
    password: "",
  },
};

export function LoginForm() {
  const [formData, setFormData] = useState(defaultFormData);
  const [, setUserData] = useAtom(userDataAtom);
  const returnUrl = useQuery("returnUrl");
  const navigate = useNavigate();

  const mutation = useMutation(
    (userData) => {
      return axios.post("/api/users/login", userData, {
        headers: { "Content-Type": "application/json" },
      });
    },
    {
      onError: (error) => {
        const errorMsg = error.response?.data?.msg;
        const invalidUser =
          (errorMsg || "").indexOf("invalid email or password") > -1;

        setFormData((pre) => ({
          ...pre,
          errors: {
            ...pre.errors,
            password: invalidUser
              ? "invalid email or password"
              : "error: unable to login",
          },
        }));
      },
      onSuccess: (res) => {
        const { data } = res;
        setUserData(data);
        navigate(returnUrl);
      },
      onSettled: () => {
        mutation.reset();
      },
    }
  );

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      const { hasError, errors } = getFormErrors(formData);
      if (hasError) {
        setFormData((pre) => ({ ...pre, errors }));
        return;
      }
      const userData = { ...formData };
      delete userData.errors;
      mutation.mutate(userData);
    },
    [formData, mutation]
  );

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    const error = value ? "" : `${name} is required`;
    setFormData((pre) => ({
      ...pre,
      [name]: value,
      errors: {
        ...pre.errors,
        [name]: error,
      },
    }));
  }, []);

  return (
    <Box component="form" noValidate autoComplete="off" className="form">
      <TextField
        name="email"
        value={formData.email}
        id="email"
        label="Email"
        variant="outlined"
        onChange={handleChange}
        helperText={formData.errors.email}
        error={!!formData.errors.email}
      />
      <TextField
        name="password"
        value={formData.password}
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        onChange={handleChange}
        helperText={formData.errors.password}
        error={!!formData.errors.password}
      />
      <Button
        disabled={mutation.isLoading}
        variant="contained"
        type="submit"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
}
