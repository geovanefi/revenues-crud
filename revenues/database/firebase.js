import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDgu6sVKbBvv7rcQBkjz7XfdbWlH8ar5RA",
  authDomain: "revenues-g4f.firebaseapp.com",
  projectId: "revenues-g4f",
  storageBucket: "revenues-g4f.appspot.com",
  messagingSenderId: "815829758388",
  appId: "1:815829758388:web:98e8d785b6c7cd834f02e1",
  measurementId: "G-WKJ16RNDTK"
};


let fireDb = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default fireDb.database().ref()