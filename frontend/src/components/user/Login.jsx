import { Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { Link } from "react-router-dom";

import { LoginForm } from "./LoginForm";
import { FormContainer } from "./FormContainer";

export default function Login() {
  return (
    <FormContainer title="Login">
      <LoginForm />
      <Typography variant="body1">
        Don't have account?{" "}
        <MuiLink
          color="secondary"
          component={Link}
          variant="body1"
          to="/register"
        >
          Register
        </MuiLink>{" "}
        here
      </Typography>
    </FormContainer>
  );
}
