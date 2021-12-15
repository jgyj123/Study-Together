import "./MentalHealth.css";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoodIcon from "@mui/icons-material/Mood";

const MentalHealth = () => {
  return (
    <div className="background__">
      <div className="info">
        <Typography fontFamily="Merriweather Sans" color="white">
          The following on-campus hotline numbers re available for immediate
          assistance. Campus Security Hotline:
        </Typography>
      </div>
      <div className="phoneNumberTable">
        <tbody>
          <tr>
            <th> Kent Ridge Campus</th>
            <td>
              <a href="tel:+6568741616">+65 68741616</a>
            </td>
          </tr>
          <tr>
            <th> Bukit Timah Campus</th>
            <td>
              <a href="tel:+6565163636">+65 65163636</a>
            </td>
          </tr>
          <tr>
            <th> Outram Campus</th>
            <td>
              <a href="tel:+6562225568">+65 62225568</a>
            </td>
          </tr>
          <tr>
            <th> Lifeline NUS</th>
            <td>
              <a href="tel:+6565167777">+65 65167777</a>
            </td>
          </tr>
        </tbody>
      </div>
      <div className="chatBot">
        <div className="chatBotTop">
          <MoodIcon fontSize="large" />
          Trained Specialist
        </div>
        <div className="chatBotBody">
          <p className="sentMessage">Hi, Ive been feeling down lately.</p>
          <p className="receivedMessage">Oh Dear, care to share? :)</p>
          <p className="sentMessage">
            I've been feeling overwhelmed by school work
          </p>
          <p className="receivedMessage">
            well, its completely normal to feel such a way!
          </p>
          <p className="sentMessage">
            Thank you for lending me a listening ear
          </p>
          <p className="receivedMessage">Any time!</p>
        </div>
        <div className="chatBotBottom">
          <input id="message" placeholder="Enter a Message"></input>
          <div className="sendIcon">
            <SendIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;
