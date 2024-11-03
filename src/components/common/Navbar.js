"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* AppBar for the Navbar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", color: "#111827" }}
      >
        <Toolbar className="container">
          <Typography variant="h4" component="div" className="grow">
            <Link
              href="/"
              className="font-bold text-3xl md:text-3xl lg:text-4xl"
            >
              AddisFinancial
            </Link>
          </Typography>

          {/* Hamburger Menu Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Links for larger screens */}
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Link
              href="/"
              className="py-0 px-4 hover:underline hover:underline-offset-4"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="py-0 px-4 hover:underline hover:underline-offset-4"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-0 px-4 hover:underline hover:underline-offset-4"
            >
              Contact Us
            </Link>
            <Link
              href="/blog"
              className="py-0 px-4 hover:underline hover:underline-offset-4"
            >
              More
            </Link>
            <Link
              href="/auth/signup"
              className="ml-4 border border-gray-900 hover:border-transparent hover:bg-gray-900 hover:text-white rounded-xl px-4 py-2"
            >
              Signup
            </Link>
            <Link
              href="/auth/login"
              className="ml-4 bg-gray-900 text-white rounded-xl hover:text-gray-900 hover:bg-white border border-transparent hover:border-gray-900 px-4 py-2 text-center"
            >
              Login
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MUI Drawer for mobile navigation */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation">
          <IconButton onClick={toggleDrawer} className="m-2">
            <CloseIcon />
          </IconButton>

          <List>
            <ListItem button onClick={toggleDrawer}>
              <Link
                className="w-full hover:underline hover:underline-offset-2"
                href="/"
              >
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <Link
                className="w-full hover:underline hover:underline-offset-2"
                href="/about"
              >
                <ListItemText primary="About" />
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <Link
                className="w-full hover:underline hover:underline-offset-2"
                href="/contact"
              >
                <ListItemText primary="Contact Us" />
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <Link
                className="w-full hover:underline hover:underline-offset-2"
                href="/blog"
              >
                <ListItemText primary="More" />
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <Link
                className="w-full border text-center border-gray-900 rounded-xl px-4 py-2"
                href="/auth/signup"
              >
                <ListItemText primary="Signup" />
              </Link>
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
              <Link
                className="w-full bg-gray-900 text-white rounded-xl hover:text-gray-900 hover:bg-white border border-transparent hover:border-gray-900 px-4 py-2 text-center"
                href="/auth/login"
              >
                <ListItemText primary="Login" />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
