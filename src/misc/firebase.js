// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase, { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCimmOag0l5gV25KxFcR5avYirDuCsolpM",
    authDomain: "chat-app-74c6e.firebaseapp.com",
    databaseURL: "https://chat-app-74c6e.firebaseio.com",
    projectId: "chat-app-74c6e",
    storageBucket: "chat-app-74c6e.appspot.com",
    messagingSenderId: "924386090896",
    appId: "1:924386090896:web:4cb180afe5334e91405d15",
    measurementId: "G-8TDV4TZLNB"
  };
  
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const auth= firebase.auth();
  const db =  firebase.database();
  const storage= firebase.storage()

  export {storage,db, auth}