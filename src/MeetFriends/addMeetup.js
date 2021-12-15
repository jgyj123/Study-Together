import "./addMeetup.css";
import React, { Component } from "react";
import Button from "@mui/material/Button";
import { auth } from "../firebase.js";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

class AddMeetup extends React.Component {
  state = {
    id: auth.currentUser.uid,
    username: auth.currentUser.displayName,
    profilepic: auth.currentUser.photoURL,
    title: "",
    description: "",
    attendees: 0,
  };
  handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const colRef = collection(db, "addfriends");

    addDoc(colRef, {
      id: this.state.id,
      name: this.state.username,
      description: this.state.description,
      attendees: this.state.attendees,
    });
    this.props.close();
  };
  render() {
    return (
      <div>
        <h1>Add a meetup!</h1>
        <div className="add__meetup">
          <div className="add__top">
            <p>Title:</p>{" "}
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="add__bottom">
            <p>Meetup Details:</p>{" "}
            <input
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="add__button__2">
            <Button
              className="back__button"
              variant="contained"
              style={{ backgroundColor: "black" }}
              onClick={() => this.props.close()}
            >
              back
            </Button>
            <Button
              className="add__button"
              variant="contained"
              style={{ backgroundColor: "black" }}
              onClick={this.handleSubmit}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMeetup;
