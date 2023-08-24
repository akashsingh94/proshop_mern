import { Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { Link } from "react-router-dom";

import { RegisterForm } from "./RegisterForm";
import { FormContainer } from "./FormContainer";

export function Register() {
  return (
    <FormContainer title="Register">
      <RegisterForm />
      <Typography variant="body1">
        Already have account?{" "}
        <MuiLink color="secondary" component={Link} variant="body1" to="/login">
          Login
        </MuiLink>{" "}
        here
      </Typography>
    </FormContainer>
  );
}
