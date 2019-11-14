self.addEventListener('message', (e) => {
    if (!e.data) {
        return;
    }
    switch (e.data) {
        case 'skipWaiting':
            self.skipWaiting();
            break;
        default:
            // NOOP
            break;
    }
});

importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js')

var config = {
    apiKey: "AIzaSyDtbULJZ1AJUaltgO7uGYQCiovhCdUan14",
    authDomain: "testnotifications-a3fbd.firebaseapp.com",
    databaseURL: "https://testnotifications-a3fbd.firebaseio.com",
    projectId: "testnotifications-a3fbd",
    storageBucket: "testnotifications-a3fbd.appspot.com",
    messagingSenderId: "864024076555",
    appId: "1:864024076555:web:f0e39cb32ab6a4768c020e"
}

firebase.initializeApp(config)

const messaging = firebase.messaging()

workbox.clientsClaim();

// The precaching code provided by Workbox.
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});