import React, { useEffect, useState } from "react";
import "./makenewFriends.css";
import MeetFriends from "./friendsAround";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OpenJio from "./openJio";
import { auth } from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  onSnapshot,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const MakeFriendsHome = () => {
  {
    return (
      <div className="make__friends__main">
        <div className="make__friends__left">
          <MeetFriends faculty={"computing"} />
        </div>
        <div className="make__friends__right">
          <OpenJio />
        </div>
      </div>
    );
  }
};

export default MakeFriendsHome;
