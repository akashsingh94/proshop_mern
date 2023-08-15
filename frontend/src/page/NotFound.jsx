import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

import "./NotFound.css";

export function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-content">
        <Typography variant="h1">404</Typography>
        <Typography variant="h6">
          The page you’re looking for doesn’t exist.
        </Typography>
        <Button component={Link} to="/" variant="contained">
          Back Home
        </Button>
      </div>
    </div>
  );
}
