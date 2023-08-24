import { Paper, Typography } from "@mui/material";

import "./FormContainer.css";

export function FormContainer({ title, children }) {
  return (
    <div className="full-size flex-center">
      <Paper className="form-paper" sx={{ p: 2 }}>
        <Typography variant="h6">{title}</Typography>
        {children}
      </Paper>
    </div>
  );
}
