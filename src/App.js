import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./Navbar/Navbar";
import Login from "./login";
import Homepage from "./homePage";
import AskQuestions from "./AskingQuestions/AskingQuestionDraft";
import AddQuestion from "./AskingQuestions/AddQuestion";
import ListOfQuestions from "./AskingQuestions/ListOfQuestions";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Setup from "./setupProfile";
import MakeFriendsHome from "./MeetFriends/makeNewFriends";
import MentalHealth from "./Mental Health/MentalHealth";
import { useNavigate } from "react-router-dom";
function App() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => console.log(re))
      .catch((err) => console.log(err));
  };

  const [user] = useAuthState(auth);
  if (!user) {
    return <Login login={signInWithGoogle} />;
  }

  return (
    <div className="App">
      <div className="navBar">
        <NavBar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage user={user} />}></Route>
          <Route path="/questions" element={<AskQuestions />}></Route>
          <Route path="/MNF" element={<MakeFriendsHome user={user} />}></Route>
          <Route path="/addQuestion" element={<AddQuestion />}></Route>
          <Route path="/editProfile" element={<Setup user={user} />}></Route>
          <Route
            path="/listQuestions/:faculty"
            element={<ListOfQuestions />}
          ></Route>
          <Route path="/HelpMe" element={<MentalHealth />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
