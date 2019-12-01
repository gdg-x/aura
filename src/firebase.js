import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBb-1hlnQfIELblC3HUqzI-M29xiwoMYds",
  authDomain: "mitre-saf.firebaseapp.com",
  databaseURL: "https://mitre-saf.firebaseio.com",
  projectId: "mitre-saf",
  storageBucket: "mitre-saf.appspot.com",
  messagingSenderId: "157303555912",
  appId: "1:157303555912:web:04c0e431777d1ee41f557d"
};

firebase.initializeApp(config);

export default {
  messaging: firebase.messaging(),
  firestore: firebase.firestore(),
  auth: firebase.auth()
};
