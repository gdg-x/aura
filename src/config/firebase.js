import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCOl0qzkhCDmyWeeIT8AZe4xyJJlIfU5gE",
  authDomain: "myaurapp.firebaseapp.com",
  databaseURL: "https://myaurapp.firebaseio.com",
  projectId: "myaurapp",
  storageBucket: "myaurapp.appspot.com",
  messagingSenderId: "419511997060",
  appId: "1:419511997060:web:ce7aa0d308f6b484f868d1"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().enablePersistence({synchronizeTabs:!0}).catch(()=>{console.warn("DB offline support not available")})
export default{
  notificationSupported:firebase.messaging.isSupported(),
  messaging: (firebase.messaging.isSupported())?firebase.messaging():null,
  firestore: firebase.firestore(),
  auth:firebase.auth(),
  storage:firebase.storage(),
};