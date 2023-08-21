import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useCallback, useState } from "react";

import { getFormErrors } from "../../utils/formUtil";

export function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    errors: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      const { hasError, errors } = getFormErrors(formData);
      if (hasError) {
        setFormData((pre) => ({ ...pre, errors }));
        return;
      }
      alert("kar denge tumko loggedIn");
    },
    [formData]
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
    <Box component="form" noValidate autoComplete="off" className="login-form">
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
        Login
      </Button>
    </Box>
  );
}
