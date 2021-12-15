import React, { Component } from "react";
import "./makeFriend.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Chat from "./chatFriends";
class NewFriend extends React.Component {
  state = {
    chat: false,
  };
  handleClick = () => {
    this.setState({
      chat: true,
    });
  };
  handleClose = () => {
    this.setState({
      chat: false,
    });
  };
  render() {
    if (this.state.chat) {
      return (
        <Chat
          receiver={this.props.newfriend.name}
          close={this.handleClose}
        ></Chat>
      );
    }
    return (
      <div className="new__tile">
        <div className="tile__top">
          <div className="name__pic">
            <div className="info__tile">{this.props.newfriend.img}</div>
            <div className="info__tile">{this.props.newfriend.name}</div>
          </div>
          <div className="info__tile2">{this.props.newfriend.course}</div>
          <div className="info__tile2">
            {"year" + this.props.newfriend.year}
          </div>
          <div className="info__tile2">{this.props.newfriend.hall}</div>
        </div>

        <div className="tile__bottom">
          <div className="description__container">
            {"Short Description:  " + this.props.newfriend.description}
          </div>
          <div className="contact__icons">
            <ChatBubbleOutlineIcon onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default NewFriend;
