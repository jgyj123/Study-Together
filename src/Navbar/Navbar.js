import React, { Component } from "react";
import "./Navbar.css";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
class NavBar extends React.Component {
  render() {
    return (
      <div className="nav__main">
        <div className="nav__left">
          <MenuBookIcon style={{ fontSize: 50 }} />
          <h1>
            <Typography
              variant="h3"
              fontFamily="Merriweather Sans"
              fontWeight="600"
            >
              Study Together
            </Typography>
          </h1>
        </div>
        <div className="nav__right">
          <div className="nav__icons">
            <Link style={{ color: "white" }} to="/">
              <HomeIcon fontSize="large" />
            </Link>
            <Link style={{ color: "white" }} to="/editProfile">
              <PermIdentityIcon fontSize="large" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
