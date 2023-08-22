import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { AppHeaderActions } from "./AppHeaderActions";

export function AppHeader() {
  return (
    <Box className="app-header" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
              textAlign: "start",
            }}
          >
            ProShop
          </Typography>
          <AppHeaderActions />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
