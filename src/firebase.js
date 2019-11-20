import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA03AKHjhPobzLYvGWjyZ700WTe2DmIHtI",
    authDomain: "mitre-saf.firebaseapp.com",
    databaseURL: "https://mitre-saf.firebaseio.com",
    projectId: "mitre-saf",
    storageBucket: "mitre-saf.appspot.com",
    messagingSenderId: "238290153339",
  };
  
firebase.initializeApp(config);

export default {
    messaging: firebase.messaging(),
    firestore: firebase.firestore(),
    auth:firebase.auth()
  }
