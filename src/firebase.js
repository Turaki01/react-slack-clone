import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyALCggqR5JvKrdJxZS3VBuYXgyDuhfWCWs",
    authDomain: "react-slack-clone-b0a8d.firebaseapp.com",
    databaseURL: "https://react-slack-clone-b0a8d.firebaseio.com",
    projectId: "react-slack-clone-b0a8d",
    storageBucket: "react-slack-clone-b0a8d.appspot.com",
    messagingSenderId: "592142735619",
    appId: "1:592142735619:web:dfec2f2a7d4ccfef61f136",
    measurementId: "G-SZHBTFM5K3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;