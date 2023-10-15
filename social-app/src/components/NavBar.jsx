import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { MenuOpen, Notifications } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const IconsMob = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  display: "flex",
  gap: 10,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [avatarToggle, setAvatarToggle] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <MenuOpen
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        />
        <Typography
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          SOCIAL
        </Typography>
        <Search>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-search"
            placeholder="Search"
            type="search"
          />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              width: "30px",
              height: "30px",
            }}
            src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600"
            onClick={(e) => setAvatarToggle(true)}
          />
        </Icons>
        <IconsMob onClick={(e) => setAvatarToggle(true)}>
          <Avatar
            sx={{
              width: "30px",
              height: "30px",
            }}
            src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Typography>Apuroop</Typography>
        </IconsMob>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={avatarToggle}
        onClose={() => setAvatarToggle(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
