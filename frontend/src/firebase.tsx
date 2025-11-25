// firebase-messaging-sw.js
import { initializeApp } from "firebase/app";
import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";

const firebaseConfig = {
  apiKey: "AIzaSyAEgWOEVH0DacBy1xipren9havKuvUF4fQ",
  authDomain: "distributed-systems-3349d.firebaseapp.com",
  projectId: "distributed-systems-3349d",
  storageBucket: "distributed-systems-3349d.firebasestorage.app",
  messagingSenderId: "75581929691",
  appId: "1:75581929691:web:43f2ba9a532a1bacd9b4fe",
  measurementId: "G-JJRB8DVVZV"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  console.log("Received background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body ? payload.notification.body : '',
    icon: payload.notification.icon ? payload.notification.icon : '/firebase-logo.png',
  });
});

export { app, messaging }
