import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useAtom } from "jotai";
import { forwardRef } from "react";

import { toasterAtom } from "../../atom/globalAtom";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export function Toaster() {
  const [toasterInfo, setToasterInfo] = useAtom(toasterAtom);
  const { open, severity, message } = toasterInfo;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToasterInfo((pre) => ({ ...pre, open: false }));
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
