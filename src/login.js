import React, { Component } from "react";
import NavBar from "./Navbar/Navbar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "./login.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Icon from "@material-ui/core/Icon";
import GoogleIcon from "@mui/icons-material/Google";

/* login Navbar    0.8cm 
regular Navbar  1.55cm */
const Login = (props) => {
  return (
    <div className="login__main">
      <div className="topbar">
        <div className="nav_left">
          <div>
            <Typography
              variant="h3"
              fontFamily="Merriweather Sans"
              fontWeight="600"
              color="white"
              align="center"
            >
              Study Together
            </Typography>
          </div>
        </div>
      </div>

      <div>
        <form className="login">
          <MenuBookIcon style={{ fontSize: 100 }} />
          <br />
          <br />

          <div className="form__element">
            {" "}
            <label for="username">
              <Typography fontFamily="Merriweather Sans" variant="caption">
                Username:{" "}
              </Typography>{" "}
            </label>
            <input
              id="username"
              type="text"
              placeholder="username"
              name="username"
            ></input>
          </div>
          <div className="form__element">
            <label for="password">
              <Typography fontFamily="Merriweather Sans" variant="caption">
                Password:{" "}
              </Typography>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
            ></input>
          </div>
          <div className="login__button__container">
            <div className="login__button">
              <Button
                variant="contained"
                style={{
                  maxWidth: "100%",
                  backgroundColor: "black",
                  minWidth: "100%",
                }}
                onClick={props.login}
              >
                Log in
              </Button>
            </div>

            <div className="login__button">
              <Button
                variant="contained"
                onClick={props.login}
                style={{
                  textTransform: "none",
                  maxWidth: "100%",

                  minWidth: "100%",
                }}
              >
                <GoogleIcon size="small"></GoogleIcon>
                <Typography
                  color="#1976d2
"
                >
                  {" "}
                </Typography>
                <Typography
                  fontFamily="Roboto"
                  color="white"
                  fontWeight="500"
                  align="center"
                >
                  Sign in with Google
                </Typography>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
