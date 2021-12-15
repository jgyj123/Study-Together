import "./meetup.css";
import React, { Component } from "react";
import Button from "@mui/material/Button";
import PeopleIcon from "@mui/icons-material/People";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { documentId } from "firebase/firestore";
class MeetupTile extends React.Component {
  state = {
    attendees: 0,
  };
  handleClick = () => {
    this.setState({
      attendees: this.state.attendees + 1,
    });
    document.getElementById("join").disabled = true;
    document.getElementById("join").textContent = "Joined";
    document.getElementById("join").style.backgroundColor = "gray";
  };
  render() {
    return (
      <div className="meetup__main">
        <div className="meetup__top">
          <div className="user__info">
            {this.props.profilepic}
            {this.props.name}
          </div>
        </div>
        <div className="meetup__bottom">
          <div className="meetup__title">{this.props.title}</div>
          <div className="meetup__description">{this.props.description}</div>
        </div>
        <div className="joined__users">
          <PeopleIcon />
          {this.state.attendees}

          <div className="join_button">
            <Button
              variant="contained"
              id="join"
              style={{
                maxWidth: "100px",
                maxHeight: "30px",
                minWidth: "100px",
                minHeight: "30px",
              }}
              onClick={this.handleClick}
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetupTile;
