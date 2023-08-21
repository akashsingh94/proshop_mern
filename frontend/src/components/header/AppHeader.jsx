import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useAtom } from "jotai/react";

import { totalCartItemsAtom } from "../../atom/cartAtoms";
import "./AppHeader.css";

export function AppHeader() {
  const [totalItems] = useAtom(totalCartItemsAtom);
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
          <div className="app-header__actions">
            <Button
              color="inherit"
              component={Link}
              to="/cart"
              startIcon={
                <Badge badgeContent={totalItems || undefined} color="secondary">
                  <ShoppingCartIcon color="action" />
                </Badge>
              }
            >
              Cart
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              component={Link}
              to="/login"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
