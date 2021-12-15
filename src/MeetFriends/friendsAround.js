import React, { useState, useEffect } from "react";

import "./friendsAround.css";
import NewFriend from "./newFriend";
import {
  collection,
  onSnapshot,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { auth } from "../firebase.js";
const MeetFriends = (props) => {
  const [users, setUsers] = useState([]);
  const [currentuser, setUser] = useState({});
  const [usfaculty, setFaculty] = useState("");
  const db = getFirestore();
  const colRef = collection(db, "users");
  const userdb = query(colRef, where("id", "==", auth.currentUser.uid));

  useEffect(() => {
    getDocs(userdb).then((snapshot) => {
      let person = [];
      snapshot.docs.forEach((doc) => {
        setUser({ ...doc.data(), id: doc.id });
      });
      console.log(currentuser);
    });
    const q = query(colRef, where("faculty", "==", "computing"));
    onSnapshot(q, (snapshot) => {
      let books = [];
      snapshot.docs.map((doc) => {
        books.push({ ...doc.data(), id: doc.id });
      });
      setUsers(books);
    });
  }, []);

  //console.log(currentuser);

  /*{useEffect(() => {
    let isMounted = false;
    if (currentuser != {}) {
      setUser(currentuser);
    } else {
      isMounted = true;
    }
    fetchData();
    test();

    return () => (isMounted = false);
  }, []);

  const fetchData = () => {
    //draw user data
    const user = query(colRef, where("id", "==", auth.currentUser.uid));
    onSnapshot(user, (res) => {
      setUser(res.data());
      console.log(res.data());
    });
  };

  const test = () => {
    const q = query(colRef, where("faculty", "==", usfaculty));
    onSnapshot(q, (snapshot) => {
      let books = [];
      snapshot.docs.map((doc) => {
        books.push({ ...doc.data(), id: doc.id });
      });
      setUsers(books);
    });
  };
}*/

  return (
    <div>
      <div className="top__div">
        <h1>Chat with friends from your faculty!</h1>
      </div>

      <div className="newFriends">
        {users.map((user) => {
          return (
            <div className="friend__tile">
              <NewFriend
                newfriend={{
                  name: user["username"],
                  img: <AccountCircleIcon />,
                  course: user["course"],
                  year: user["year"],
                  description: user["description"],
                  hall: user["hall"],
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetFriends;
