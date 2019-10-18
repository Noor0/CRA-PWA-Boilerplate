console.log('My Custom Service Worker');

workbox.precaching.precacheAndRoute(self.__precacheManifest);
