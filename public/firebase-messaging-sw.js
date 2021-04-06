importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
  importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyDPD7DxcIUaqhIV2AZ1OfAfw4w-s0z4RJg",
    authDomain: "notification-app-3e58d.firebaseapp.com",
    projectId: "notification-app-3e58d",
    storageBucket: "notification-app-3e58d.appspot.com",
    messagingSenderId: "328993332360",
    appId: "1:328993332360:web:9b461b9d37317d7434533d"
  };

  firebase.initializeApp(firebaseConfig);
  firebaseConfig.messaging()