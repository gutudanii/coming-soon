"use client";

import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export default function DashboardLayout({ children }) {
  //    logout function
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (res.ok) {
      router.push("/auth/login"); // Redirect to login after logging out
    } else {
      console.error("Failed to log out");
    }
  };

  // menu
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setDrawerOpen(false);
  };

  return (
    <div>
      {/* AppBar */}
      <AppBar className="bg-gray-900" position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <Box sx={{ display: "flex", alignItems: "center", padding: 2 }}>
            <Avatar sx={{ marginRight: 2 }}>U</Avatar>
            <Typography variant="h6">Username</Typography>
          </Box>
          <Divider />
          <List>
            <ListItem button onClick={() => handleNavigation("/dashboard")}>
              <HomeIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleNavigation("/dashboard/settings")}
            >
              <SettingsIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <LogoutIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Log Out" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      {/* Main content */}
      {children}
    </div>
  );
}
