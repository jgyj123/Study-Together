// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgwUGtCoM7a9_6nH25hXMQX2cAYsqj9sk",
  authDomain: "study-together-hackathon.firebaseapp.com",
  projectId: "study-together-hackathon",
  storageBucket: "study-together-hackathon.appspot.com",
  messagingSenderId: "380321441252",
  appId: "1:380321441252:web:078503fa023d605c4093f1",
  measurementId: "G-5RWR28VLJH",
  databaseURL:
    "https://study-together-hackathon-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export const db = getDatabase(app);
const db = getFirestore();
let posts = [];
const colRef = collection(db, "question");
getDocs(colRef).then((sn) => {
  sn.docs.forEach((doc) => {
    posts.push({ ...doc.data() });
  });
});
console.log(posts);

export const auth = getAuth(app);
export { db };

/*
youtube tutorial

import {getFirestore, collection, getDocs,
       addDoc, deleteDoc, doc} from "firebase/firestore"

//doc function helps to get reference to a specific doc not the entire reference

//
import {onSnapshot} from "firebase/firestore"
//real time collection data
onSnapshot(arg1, arg2)
//arg1 is colReg aka reference to the collection we interested in
//arg2 is a function (sends a snapshot) that will be triggered everytime there is a change in the colection ie our colRef and 
//also initially at the start 
//does not have a .then() method

onSnapshot(colRef, (snapshot) => {
  let books = []
  snapshot.docs.forEach((doc) => {
    books.push({...doc.data(), id = doc.id})
  })
  console.log(books)
})

//

//Queries
import {query, where} from "firebase/firestore"
const q = query(colRef, where())

//args for query --> reference to collection we interested in and also where() function
//args for where() --> arg1 = fieldname/propertyname eg author arg2 --> comparision operator in strings arg3 --> compared to
*/
