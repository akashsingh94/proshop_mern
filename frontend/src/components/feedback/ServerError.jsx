import { Button, Typography } from "@mui/material";

import "./ServerError.css";

export function ServerError({ onRetry }) {
  return (
    <div className="error-wrapper">
      <div className="error-content">
        <Typography variant="h1">500</Typography>
        <Typography variant="h6">
          Oooops! Internal Server Error. That is, something went terribly wrong.
        </Typography>
        {onRetry && (
          <Button onClick={onRetry} variant="contained">
            Retry
          </Button>
        )}
      </div>
    </div>
  );
}
