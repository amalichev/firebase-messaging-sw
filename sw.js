importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
//importScripts('/node_modules/workbox-sw/build/workbox-sw.js');

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([
    'favicon.ico',
    'index.html',
]);
