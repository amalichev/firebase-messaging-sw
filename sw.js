importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute([
    'favicon.ico',
    'index.html',
]);
