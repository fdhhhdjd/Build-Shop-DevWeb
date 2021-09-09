import firebase from "firebase";
import "firebase/storage";
import "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8fCVX-YUkKr3YzM4cGJr8L9TE4KiO2yA",
  authDomain: "react-firebase-703a3.firebaseapp.com",
  projectId: "react-firebase-703a3",
  storageBucket: "react-firebase-703a3.appspot.com",
  messagingSenderId: "88018014464",
  appId: "1:88018014464:web:14a1e361c51895431ae3e5",
};

// Initialize Firebase
const firebaseGet = firebase.initializeApp(firebaseConfig);
const firebaseDb = firebase.database().ref();
const db = firebaseGet.firestore();
const auth = firebase.auth();
// const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {
  auth,
  // projectFirestore,
  timestamp,
  firebaseDb,
  firebaseGet,
  db,
  googleAuthProvider,
};
