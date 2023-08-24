import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

import { getFormErrors } from "../../utils/formUtil";
import { Spinner } from "../feedback/Spinner";
import { useAtom } from "jotai";
import { toasterAtom } from "../../atom/globalAtom";

const defaultFormData = {
  name: "",
  email: "",
  password: "",
  errors: {
    name: "",
    email: "",
    password: "",
  },
};

export function RegisterForm() {
  const [formData, setFormData] = useState(defaultFormData);
  const [, showFeedback] = useAtom(toasterAtom);

  const mutation = useMutation(
    (userData) => {
      return axios.post("/api/users/register", userData, {
        headers: { "Content-Type": "application/json" },
      });
    },
    {
      onError: () => {
        mutation.reset();
        showFeedback({
          open: true,
          message: "Unable to register user, please try again later!!",
          severity: "error",
        });
      },
      onSuccess: () => {
        setFormData(defaultFormData);
        showFeedback({
          open: true,
          message: "User registration successful!!",
          severity: "success",
        });
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
    <>
      <Box component="form" noValidate autoComplete="off" className="form">
        <TextField
          name="name"
          value={formData.name}
          id="name"
          label="Name"
          variant="outlined"
          onChange={handleChange}
          helperText={formData.errors.name}
          error={!!formData.errors.name}
        />
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
        <Button variant="contained" type="submit" onClick={handleLogin}>
          Register
        </Button>
      </Box>
      {mutation.isLoading && <Spinner useBackdrop={true} />}
    </>
  );
}
