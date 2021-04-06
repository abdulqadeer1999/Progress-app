import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDPD7DxcIUaqhIV2AZ1OfAfw4w-s0z4RJg",
  authDomain: "notification-app-3e58d.firebaseapp.com",
  projectId: "notification-app-3e58d",
  storageBucket: "notification-app-3e58d.appspot.com",
  messagingSenderId: "328993332360",
  appId: "1:328993332360:web:9b461b9d37317d7434533d"
};

firebase.initializeApp(firebaseConfig);
 const messaging =  firebaseConfig.messaging()

export function initNotification () {
    Notification.requestPermission().then((permission) => {
        console.log(permission)

        if(permission === "granted") {
              // Get registration token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
  messaging.getToken().then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
      console.log("TOKEN ==>",currentToken)
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
        }
    })
}