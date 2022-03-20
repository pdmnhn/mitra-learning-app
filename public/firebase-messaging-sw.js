importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyD4YH9Fc6ZOPuBjrjgeVAlavwwVnEH3cCc",
  authDomain: "mitra-learning.firebaseapp.com",
  projectId: "mitra-learning",
  storageBucket: "mitra-learning.appspot.com",
  messagingSenderId: "204199760096",
  appId: "1:204199760096:web:407a3924f193118e024085",
  measurementId: "G-248JVPL736",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

self.addEventListener(
  "notificationclick",
  function (event) {
    var url = event.notification.data["url"];
    event.notification.close();
    if (url) {
      clients.openWindow(url);
    } else {
      clients.openWindow("/");
    }
  },
  false
);

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message");

  const notificationTitle = payload.notification?.title;
  const notificationOptions = {
    body: payload.notification?.body,
    image: payload.notification?.image,
    data: payload.data,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
