import "./chatFriends.css";
import React, { Component } from "react";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
class Chat extends React.Component {
  render() {
    return (
      <div className="chat__main">
        <div className="receiver">
          <p>Send Message to:</p> <AccountCircleIcon />
          {this.props.receiver}
        </div>
        <div className="chat_bottom">
          <input className="message"></input>
          <button className="but" onClick={this.props.close}>
            <SendIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default Chat;
