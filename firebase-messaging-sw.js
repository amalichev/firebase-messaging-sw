importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBKrnnJT9TQUTzkCeP6j0Rd9MbwTWYjDoo",
  authDomain: "belliata-289ee.firebaseapp.com",
  databaseURL: "https://belliata-289ee.firebaseio.com",
  projectId: "belliata-289ee",
  storageBucket: "belliata-289ee.appspot.com",
  messagingSenderId: "243719107892",
  appId: "1:243719107892:web:0584e35ec82ec1cea2a161",
  measurementId: "G-9TGPZ5C10P"
});

const messaging = firebase.messaging();

messaging.getToken().then((currentToken) => {
  console.log('Token:', currentToken);
}).catch((error) => {
  console.log('An error occurred while retrieving token. ', error);
});