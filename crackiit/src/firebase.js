import firebase from 'firebase';
import '@firebase/firestore';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyACOu1zBsMKJpJC6e9mCx45dtqMXc5eX7o",
    authDomain: "crackiit-open.firebaseapp.com",
    databaseURL: "https://crackiit-open.firebaseio.com",
    projectId: "crackiit-open",
    storageBucket: "crackiit-open.appspot.com",
    messagingSenderId: "550602823548"
  };
  firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
