import "./setupProfile.css";
import React, { Component } from "react";
import Button from "@mui/material/Button";
import { auth } from "./firebase.js";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import Typography from "@mui/material/Typography";
import { useNavigate, Link, Navigate } from "react-router-dom";
class Setup extends React.Component {
  state = {
    id: auth.currentUser.uid,
    username: auth.currentUser.displayName,
    hall: "KE",
    year: "",
    course: "",
    faculty: "computing",
    profilepic: auth.currentUser.photoURL,
    description: "",
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
    const colRef = collection(db, "users");
    addDoc(colRef, {
      id: this.state.id,
      username: this.state.username,
      hall: this.state.hall,
      year: this.state.year,
      course: this.state.course,
      faculty: this.state.faculty,
      description: this.state.description,
      profilepic: this.state.profilepic,
    });
  };
  render() {
    return (
      <div className="setup__main">
        <h1>
          <Typography fontFamily="Merriweather Sans" variant="h2">
            Welcome to Study Together!
          </Typography>
        </h1>
        <h2>
          <Typography
            fontFamily="Merriweather Sans"
            variant="h3"
            color="#393E46"
          >
            Please fill in your details to get started!
          </Typography>
        </h2>
        <div className="details">
          <form className="setup__form">
            <div className="form__row">
              <div className="form__setup__section">
                <label for="hall" className="labels">
                  Select your hall{" "}
                </label>
                <select
                  name="hall"
                  value={this.state.hall}
                  onChange={this.handleChange}
                >
                  <option value="KE">King Edward Hall</option>
                  <option value="Raffles">Raffles Hall</option>
                  <option value="Sheares">Shears Hall</option>
                  <option value="KR">Kent Ridge Hall</option>
                  <option value="Eusoff">Eusoff Hall</option>
                  <option value="Temasek">Temasek Hall</option>
                  <option value="PGP">PGP</option>
                </select>
              </div>
              <div className="form__setup__section">
                <label for="year" className="labels">
                  which year are you in?{" "}
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={this.state.year}
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <div className="form__row">
              <div className="form__setup__section">
                <label for="course" className="labels">
                  what course are you in?
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  value={this.state.course}
                  onChange={this.handleChange}
                  placeholder="Enter your course"
                ></input>
              </div>
              <div className="form__setup__section">
                <label for="faculty" className="labels">
                  select your faculty
                </label>
                <select
                  id="faculty"
                  name="faculty"
                  value={this.state.faculty}
                  onChange={this.handleChange}
                >
                  <option value="computing">School of Computing</option>
                  <option value="science">Faculty of Science</option>
                  <option value="fass">
                    Faculty of Arts and Social Sciences
                  </option>
                  <option value="law">Faculty of Law</option>
                  <option value="medicine">School of Medicine</option>
                  <option value="dne">College of Design and Engineering</option>
                </select>
              </div>
            </div>
            <div className="description">
              <input
                type="text"
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="Tell us more about yourself!"
              ></input>
            </div>
            <div className="button_div">
              <Button
                type="submit"
                variant="contained"
                className="proceedButtonP"
                style={{
                  maxWidth: "100%;",
                  maxHeight: "40px",
                  minWidth: "100%",
                  minHeight: "40px",
                }}
                onClick={this.handleSubmit}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <Typography variant="button">Proceed</Typography>
                </Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Setup;
