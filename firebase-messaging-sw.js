importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');
importScripts('/firebase-configs.js');

firebase.initializeApp(firebaseConfigs);

const messaging = firebase.messaging();
