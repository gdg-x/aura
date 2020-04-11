self.addEventListener('message', (e) => {
    if (!e.data) return;
    switch (e.data) {
        case 'skipWaiting':
            self.skipWaiting();
            break;
        default:
            break;
    }
});

var dataPush = {};

self.addEventListener('push', (event)=>{
    if (event.data) {
        let data = JSON.parse(event.data.text());
        dataPush = data.notification;
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
            title: 'Learn More'
        }]
    };
    event.waitUntil(self.registration.showNotification(dataPush.title, options));
}
);
self.addEventListener('notificationclick', function(event) {
    if (event.action === 'register') {
        clients.openWindow(dataPush.body.regLink);
    }else if(event.action === 'visit'){
        clients.openWindow(dataPush.body.learnMore);
    }else{
        clients.openWindow("/");
    }
    event.notification.close();
}, false);

workbox.core.setCacheNameDetails({
    prefix: "cache"
});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});