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
    apiKey: "AIzaSyBb-1hlnQfIELblC3HUqzI-M29xiwoMYds",
    authDomain: "aura-gdg.firebaseapp.com",
    databaseURL: "https://aura-gdg.firebaseio.com",
    projectId: "aura-gdg",
    storageBucket: "aura-gdg.appspot.com",
    messagingSenderId: "157303555912",
    appId: "1:157303555912:web:04c0e431777d1ee41f557d"
}

firebase.initializeApp(config)

const messaging = firebase.messaging()

workbox.clientsClaim();

// The precaching code provided by Workbox.
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});