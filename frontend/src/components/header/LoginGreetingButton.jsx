import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useCallback, useState } from "react";
import { useAtom } from "jotai";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Divider, Typography } from "@mui/material";
import { useMutation } from "react-query";
import axios from "axios";
import { RESET } from "jotai/utils";

import { userDataAtom } from "../../atom/authAtom";

export function LoginGreetingButton() {
  const [userData, setUserData] = useAtom(userDataAtom);
  const [anchorEl, setAnchorEl] = useState(null);
  const { pathname } = useLocation();
  let navigate = useNavigate();

  const logoutMutation = useMutation(
    () => {
      return axios.post("/api/users/logout");
    },
    {
      onSuccess: () => {
        setUserData(RESET);
      },
    }
  );

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = useCallback(() => {
    handleClose();
    logoutMutation.mutate();
  }, [logoutMutation]);

  const handleProfileClick = useCallback(() => {
    handleClose();
    navigate("/profile");
  }, [navigate]);

  if (!userData)
    return (
      <Button
        color="inherit"
        variant="outlined"
        component={Link}
        to={`/login?returnUrl=${pathname}`}
        startIcon={<LoginIcon />}
      >
        Login
      </Button>
    );
  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Typography
          className="app-header__greeting"
          variant="body1"
          gutterBottom
        >
          Welcome, <strong>{userData.name}</strong>
        </Typography>
        <Divider />
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
