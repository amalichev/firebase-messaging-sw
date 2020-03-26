importScripts('/node_modules/workbox-sw/build/workbox-sw.js');

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([
    'favicon.ico',
    'index.html',
]);
