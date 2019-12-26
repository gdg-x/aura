self.addEventListener("message", e => {
  if (!e.data) {
    return;
  }
  switch (e.data) {
    case "skipWaiting":
      self.skipWaiting();
      break;
    default:
      // NOOP
      break;
  }
});

importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js");

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

const messaging = firebase.messaging();

var dataPush = {}

self.addEventListener('push', (event)=>{
    if (event.data) {
        let data = JSON.parse(event.data.text());
        dataPush = data.notification
        dataPush.body = JSON.parse(dataPush.body);
    }
    var options = {
        body: dataPush.body.body,
        icon: 'img/icons/favicon-32x32.png',
        dir: 'ltr',
        image: dataPush.image,
        badge: 'img/icons/favicon-32x32.png',
        tag: dataPush.tag,
        requireInteraction:true,
        renotify: true,
        actions: [{
            action: 'register',
            title: 'Register'
        },{
            action: 'visit',
            title: 'view Event'
        }]
    };
    event.waitUntil(self.registration.showNotification(dataPush.title, options));
}
);
self.addEventListener('notificationclick', function(event) {
    if (event.action === 'register') {
        clients.openWindow(dataPush.body.regLink);
    }else if(event.action === 'visit'){
        clients.openWindow("/events/"+dataPush.body.eventID);
    }else{
        clients.openWindow("/");
    }
    event.notification.close();
}, false);

workbox.clientsClaim();

// The precaching code provided by Workbox.
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
