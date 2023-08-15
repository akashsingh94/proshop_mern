import { Typography } from "@mui/material";
import React from "react";

export function NoData({ message }) {
  return (
    <div className="flex-center">
      <Typography variant="body1">{message || "No Data Found"}</Typography>
    </div>
  );
}
