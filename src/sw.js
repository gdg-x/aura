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
    authDomain: "mitre-saf.firebaseapp.com",
    databaseURL: "https://mitre-saf.firebaseio.com",
    projectId: "mitre-saf",
    storageBucket: "mitre-saf.appspot.com",
    messagingSenderId: "238290153339",
    appId: "1:157303555912:web:04c0e431777d1ee41f557d"
}

firebase.initializeApp(config)

const messaging = firebase.messaging()

workbox.clientsClaim();

// The precaching code provided by Workbox.
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
