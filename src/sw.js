/* eslint-disable no-undef, no-restricted-globals, no-underscore-dangle */
console.log('My Custom Service Worker');

workbox.precaching.precacheAndRoute(self.__precacheManifest);
