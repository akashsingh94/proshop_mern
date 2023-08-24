import { Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { Link, useLocation } from "react-router-dom";

import { LoginForm } from "./LoginForm";
import { FormContainer } from "./FormContainer";

export default function Login() {
  const { search } = useLocation();

  return (
    <FormContainer title="Login">
      <LoginForm />
      <Typography variant="body1">
        Don't have account?{" "}
        <MuiLink
          color="secondary"
          component={Link}
          variant="body1"
          to={`/register${search}`}
        >
          Register
        </MuiLink>{" "}
        here
      </Typography>
    </FormContainer>
  );
}
