import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAnWyBT9YvhIPS4iRx4oibex2_X4-huriE",
    authDomain: "react-app-a9548.firebaseapp.com",
    projectId: "react-app-a9548",
    storageBucket: "react-app-a9548.appspot.com",
    messagingSenderId: "481192256264",
    appId: "1:481192256264:web:42c53399b645d1944a42bd"
  };
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
      db,
      googleAuthProvider,
      firebase,
  }