import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FloatingHeader from './components/floating-header'

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { BrowserRouter, Route, Router, Routes } from 'react-router'
// import Tetris from './pages/games/tetris/App'

function App() {
  const [count, setCount] = useState(0)


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

  // Register service worker
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registered');
      // Now use this registration for token
      return getToken(messaging, {
        vapidKey: "BIl7fwJXXfUv_ansXZz4s2sa4SjeQeIsn3US250uwomnzyizLeVrOuN3zpcU_lY0Uk7uWrQI45zCCUTI8NXjImk",
        serviceWorkerRegistration: registration,
      });
    })
    .then((token) => {
      console.log('FCM Token:', token);
    })
    .catch((err) => console.error('Error getting FCM token:', err));

  // Handle foreground messages
  onMessage(messaging, (payload) => {
    console.log('Message received. Foreground:', payload);
  });

  return (
    <>
      <div>
        <FloatingHeader />
        {/* <BrowserRouter>
          <Routes>
            <Route path='game/tetris' element={<Tetris />} />
          </Routes>
        </BrowserRouter> */}
      </div>
    </>
  )
}

export default App
