import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export function Spinner({ useBackdrop }) {
  if (useBackdrop)
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress />
      </Backdrop>
    );
  return (
    <div className="flex-centering">
      <CircularProgress />
    </div>
  );
}
