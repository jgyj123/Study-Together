import React, { useState } from "react";
import "./openJio.css";
import MeetupTile from "./meetup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot, doc, query, where } from "firebase/firestore";
import Button from "@mui/material/Button";
import AddMeetup from "./addMeetup";
const OpenJio = (props) => {
  const db = getFirestore();
  const colRef = collection(db, "addfriends");
  const [meetups, setMeetups] = useState([]);
  const [addMode, setAddMode] = useState(false);

  onSnapshot(colRef, (snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    setMeetups(books);
  });

  const handleClick = () => {
    setAddMode(true);
  };
  const handleClose = () => {
    setAddMode(false);
  };
  {
    if (addMode) {
      return <AddMeetup close={handleClose} />;
    }
    return (
      <div className="openJio__main">
        <div className="top__main">
          <h1>Join a study session!</h1>
          <div className="add_button_container">
            <Button
              variant="contained"
              style={{
                backgroundColor: "black",
                fontSize: "40px",
                maxWidth: "40px",
                maxHeight: "40px",
                minWidth: "40px",
                minHeight: "40px",
              }}
              onClick={handleClick}
            >
              +
            </Button>
          </div>
        </div>
        <div className="meetup_tiles">
          {meetups.map((meetup) => {
            return (
              <div className="meetup__container">
                <MeetupTile
                  name={meetup.name}
                  profilepic={<AccountCircleIcon />}
                  title={meetup.title}
                  description={meetup.description}
                  attendees={meetup.attendees}
                />
              </div>
            );
          })}
        </div>

        {}
      </div>
    );
  }
};

export default OpenJio;
