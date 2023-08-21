import { Paper, Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { Link } from "react-router-dom";

import { RegisterForm } from "./RegisterForm";
import "./Register.css";

export function Register() {
  return (
    <div className="full-size flex-center">
      <Paper className="register-paper" sx={{ p: 2 }}>
        <Typography variant="h6">Register</Typography>
        <RegisterForm />
        <Typography variant="body1">
          Already have account?{" "}
          <MuiLink
            color="secondary"
            component={Link}
            variant="body1"
            to="/login"
          >
            Login
          </MuiLink>{" "}
          here
        </Typography>
      </Paper>
    </div>
  );
}
