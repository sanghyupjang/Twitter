import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBi-2JDHluj6l3rWgZbJhkwjDR9K2FMZaM",
    authDomain: "twitter-7aa83.firebaseapp.com",
    projectId: "twitter-7aa83",
    storageBucket: "twitter-7aa83.appspot.com",
    messagingSenderId: "727380553645",
    appId: "1:727380553645:web:cd81c120657f687faafb24",
    measurementId: "G-YE83QBJ1BS"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);