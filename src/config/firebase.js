import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyAvx7gMLcpEnol0lRzep687jXFzj4ENUoQ",
  authDomain: "gdg-nagpur-web-app.firebaseapp.com",
  databaseURL: "https://gdg-nagpur-web-app.firebaseio.com",
  projectId: "gdg-nagpur-web-app",
  storageBucket: "gdg-nagpur-web-app.appspot.com",
  messagingSenderId: "596571402420",
  appId: "1:596571402420:web:6bf6f6afb8c3c582"
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