import React, { Component } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CallIcon from "@mui/icons-material/Call";
import "./homePage.css";
import AskingQuestions from "./AskingQuestions/AskingQuestions";
import Typography from "@mui/material/Typography";
class Homepage extends React.Component {
  render() {
    return (
      <div className="functions">
        <div className="box">
          <div className="box__content">
            <PeopleIcon style={{ fontSize: 100 }} />
            <Link className="Make New Friends" to="/MNF">
              <p>
                <Typography
                  fontFamily="Merriweather Sans"
                  variant="h5"
                  color="#393E46"
                >
                  Make New Friends
                </Typography>
              </p>
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="box__content">
            <QuestionMarkIcon style={{ fontSize: 100 }} />
            <Link className="Ask Question" to="/questions">
              <p>
                <Typography
                  fontFamily="Merriweather Sans"
                  variant="h5"
                  color="#393E46"
                >
                  Have Question?
                </Typography>
              </p>
            </Link>
          </div>
        </div>
        <div className="box">
          <div className="box__content">
            <CallIcon style={{ fontSize: 100 }} />
            <Link className="Talk to Someone" to="/HelpMe">
              <p>
                <Typography
                  fontFamily="Merriweather Sans"
                  variant="h5"
                  color="#393E46"
                >
                  Need Someone to Talk To?
                </Typography>
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
