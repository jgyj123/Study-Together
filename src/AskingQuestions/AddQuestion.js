import React, { useState, useEffect } from "react";
import "./AddQuestion.css";
import Facultydata from "./FacultyData";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  addDoc,
  query,
  onSnapshot,
  where,
} from "firebase/firestore";
import { auth } from "../firebase.js";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const AddQuestion = (props) => {
  const [title, setTitle] = useState("");
  const [faculty, setFaculty] = useState("");
  const [details, setDetails] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [user, setUser] = useState({});
  const db = getFirestore();
  const colRef = collection(db, "question");
  const person = auth.currentUser;
  const colRef2 = collection(db, "users");
  const q = query(colRef2, where("id", "==", person.uid));
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      let books = [];
      snapshot.docs.map((doc) => {
        books.push({ ...doc.data(), id: doc.id });
      });
      setUser(books[0]);
    });
  }, []);

  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    props.setIsAdd(false);
    addDoc(colRef, {
      title: title,
      QuestionFaculty: faculty,
      details: details,
      name: user.username,
      faculty: user.faculty,
      hall: user.hall,
    });
    console.log(title);
  };

  return (
    <div className="main">
      <form className="addQuestionForm">
        <div className="QuestionHeader">
          <Typography
            fontFamily="Merriweather Sans"
            variant="h2"
            align="center"
          >
            What do you want to know?
          </Typography>
        </div>
        <div className="addQuestionRow">
          <div className="questionTitle">
            <Typography fontFamily="Playfair Display" variant="h5">
              Title:
            </Typography>
          </div>
          <input
            type="text"
            name="titleQuestion"
            placeholder="A sentence to summarise your question"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div className="addQuestionRow">
          <div className="questionTitle">
            <Typography fontFamily="Playfair Display" variant="h5">
              Faculty:
            </Typography>
          </div>
          <select
            ClassName="Faculty select"
            onChange={(e) => setFaculty(e.target.value)}
            style={{ height: "6vh", width: "50vw" }}
          >
            <option value=""> Select a Faculty </option>
            {Facultydata.map((fac) => (
              <option value={fac.Name}> {fac.Name}</option>
            ))}
          </select>
        </div>

        <div className="addQuestionRow">
          <div className="questionTitle">
            <Typography fontFamily="Playfair Display" variant="h5">
              Description:
            </Typography>
          </div>
          <input
            type="text"
            placeholder="A more detailed question can help others to understand better!"
            rows="5"
            cols="50"
            style={{ height: "13vh", width: "50vw", border: "2" }}
            onChange={(e) => setDetails(e.target.value)}
          ></input>
        </div>

        <div className="addQuestionRow">
          <div className="questionTitle">
            <Typography fontFamily="Playfair Display" variant="h5">
              Add Image or Video:
            </Typography>
          </div>
          <input type="file" name="questionfile" onChange={handleFile}></input>
        </div>

        <div className="lastrow">
          <button
            className="backButtonQ"
            style={{
              postion: "absolute",
              left: "3",
              maxWidth: "100px",
              maxHeight: "30px",
              minWidth: "100px",
              minHeight: "30px",
            }}
          >
            <Typography color="black" fontFamily="Merriweather Sans">
              Back
            </Typography>
          </button>

          {title && faculty && details ? (
            <button
              className="submitButton-enabled"
              onClick={handleSubmission}
              style={{
                maxWidth: "100px",
                maxHeight: "30px",
                minWidth: "100px",
                minHeight: "30px",
              }}
            >
              <Typography color="white" fontFamily="Merriweather Sans">
                Submit
              </Typography>
            </button>
          ) : (
            <div
              className="submitButton-disabled"
              style={{
                maxWidth: "100px",
                maxHeight: "30px",
                minWidth: "100px",
                minHeight: "30px",
              }}
            >
              <Typography color="white" fontFamily="Merriweather Sans">
                Submit
              </Typography>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddQuestion;
