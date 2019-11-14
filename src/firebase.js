import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDtbULJZ1AJUaltgO7uGYQCiovhCdUan14",
    authDomain: "testnotifications-a3fbd.firebaseapp.com",
    databaseURL: "https://testnotifications-a3fbd.firebaseio.com",
    projectId: "testnotifications-a3fbd",
    storageBucket: "testnotifications-a3fbd.appspot.com",
    messagingSenderId: "864024076555",
    appId: "1:864024076555:web:f0e39cb32ab6a4768c020e"
  };
  
firebase.initializeApp(config);

export default {
    messaging: firebase.messaging(),
    firestore: firebase.firestore(),
    auth:firebase.auth()
  }
