import { Paper, Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { Link } from "react-router-dom";

import { LoginForm } from "./LoginForm";
import "./Login.css";

export default function Login() {
  return (
    <div className="full-size flex-center">
      <Paper className="login-paper" sx={{ p: 2 }}>
        <Typography variant="h6">Login</Typography>
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
      </Paper>
    </div>
  );
}
