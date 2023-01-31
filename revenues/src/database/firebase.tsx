import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDgu6sVKbBvv7rcQBkjz7XfdbWlH8ar5RA",
  authDomain: "revenues-g4f.firebaseapp.com",
  projectId: "revenues-g4f",
  storageBucket: "revenues-g4f.appspot.com",
  messagingSenderId: "815829758388",
  appId: "1:815829758388:web:98e8d785b6c7cd834f02e1",
  measurementId: "G-WKJ16RNDTK"
};

export const fireDb = initializeApp(firebaseConfig);
