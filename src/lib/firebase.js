// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAXgpMSfZrL5mitg2tneFcuJfF63xBSkjo",
  authDomain: "chat-app-kap.firebaseapp.com",
  projectId: "chat-app-kap",
  storageBucket: "chat-app-kap.appspot.com",
  messagingSenderId: "850817685505",
  appId: "1:850817685505:web:21f6d3f4d03762452d0800",
  measurementId: "G-98Q1MQW4LP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
