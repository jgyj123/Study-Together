import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { collection, onSnapshot, doc, query, where } from "firebase/firestore";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "./ListOfQuestions.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Button from "@mui/material/Button";
import AddQuestion from "./AddQuestion";
import Chat from "../MeetFriends/chatFriends";

const ListOfQuestions = () => {
  const faculty = useLocation().pathname;
  const fac = faculty.split("/");
  const fac2 = fac[2].split("%20");

  const db = getFirestore();
  const colRef = collection(db, "question");
  const userDB = collection(db, "users");
  let questions = [];
  const [test, setTest] = useState([]);
  const [sp, setSP] = useState({});
  const [one, setOne] = useState([]);

  let ans = [];

  const [isAdd, setIsAdd] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  /*{const fetchData = () => {
    getDocs(colRef).then((sn) => {
      sn.docs.map((doc) => {
        questions.push({ ...doc.data() });
      });
      setTest(questions);
    });
  };
function fetchUser(userid) {
    const u = query(userDB, where("id", "==", userid));
    onSnapshot(u, (sn) => {
      sn.docs.map((doc) => {
        setSP(doc.data());
      });
    });
  }

  function getUser(userid) {
    fetchUser(userid);
    return sp;
  }}*/

  const fetchData = () => {
    const q = query(colRef, where("faculty", "==", fac2.join(" ")));
    onSnapshot(q, (sn) => {
      sn.docs.map((doc) => {
        questions.push({ ...doc.data() });
      });
      setTest(questions);
    });
  };

  for (let i = 0; i < test.length; i++) {
    const u = query(userDB, where("id", "==", test[i].name));
    onSnapshot(u, (sn) => {
      sn.docs.map((doc) => {
        ans.push({
          name: doc.data().username,
          faculty: doc.data().faculty,
          hall: doc.data().hall,
          title: test[i].title,
          description: test[i].details,
        });
        setOne(ans);
      });
    });

    console.log(ans);
  }

  function closeChat() {
    setChatOpen(false);
  }

  return (
    <div className="MainListQ">
      <div className="header__top__">
        <div
          className="facultyName"
          style={{
            fontFamily: "Merriweather Sans",
            fontweight: "bold",
          }}
        >
          {fac2.join(" ")}
        </div>
        <div className="addQuestionButton">
          <Button
            variant="contained"
            onClick={() => setIsAdd(true)}
            style={{
              color: "white",
              backgroundColor: "black",
              fontSize: "16px",
              maxWidth: "200px",
              maxHeight: "40px",
              minWidth: "200px",
              minHeight: "40px",
              textDecoration: "none",
            }}
          >
            Ask A Question
          </Button>
        </div>
      </div>
      {isAdd ? (
        <AddQuestion setIsAdd={setIsAdd} />
      ) : (
        <div className="QuestionList">
          {one.map((req) => (
            <div className="question__tile">
              <div className="tile__top">
                <div className="segment__name">
                  <AccountBoxIcon />
                  {req.name}
                </div>
                {<div className="segment_fluffy"> {req.faculty}</div>}
                <div className="segment_fluffy"> {req.hall}</div>
              </div>
              <div className="tile__bottom2">
                <div className="segment_title"> Title: {req.title}</div>
                <div className="segment_description"> {req.description}</div>
                <div className="tile__footer">
                  <div className="segment_Reply"></div>
                  <div
                    className="contact__icons"
                    style={{
                      position: "absolute",
                      right: "0px",
                    }}
                    onClick={() => setChatOpen(true)}
                  >
                    <ChatBubbleOutlineIcon />
                  </div>
                </div>
                {chatOpen ? (
                  <div className="chat_">
                    <div className="bubble">
                      <Chat close={closeChat} />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListOfQuestions;
