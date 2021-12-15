import React, { Component } from "react";
import "./makenewFriends.css";
import MeetFriends from "./MeetFriends/friendsAround";
class MakeFriendsHome extends React.Component {
  render() {
    return (
      <div className="make__friends__main">
        <div className="make__friends__left"></div>
        <MeetFriends />
        <div className="make__friends__right"></div>
      </div>
    );
  }
}

export default MakeFriendsHome;
