import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBb-1hlnQfIELblC3HUqzI-M29xiwoMYds",
    authDomain: "aura-gdg.firebaseapp.com",
    databaseURL: "https://aura-gdg.firebaseio.com",
    projectId: "aura-gdg",
    storageBucket: "aura-gdg.appspot.com",
    messagingSenderId: "157303555912",
    appId: "1:157303555912:web:04c0e431777d1ee41f557d"
  };
  
firebase.initializeApp(config);

export default {
    messaging: firebase.messaging(),
    firestore: firebase.firestore(),
    auth:firebase.auth()
  }
