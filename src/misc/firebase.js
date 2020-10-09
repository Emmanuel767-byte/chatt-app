// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app"
import 'firebase/auth';
import "firebase/database";
import "firebase/storage";


/*
{ 
  "rules": {
    "profiles": {
      "$user_id":{ 
        ".read": "$user_id=== auth.uid",
        ".write": "$user_id=== auth.uid"
      }
  },
    ".read": false,
    ".write": false
  }
}


*/

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLDRN6_IPf1eQGBy9--w_L-KmlmioxbtQ",
  authDomain: "chat-app-91ae6.firebaseapp.com",
  databaseURL: "https://chat-app-91ae6.firebaseio.com",
  projectId: "chat-app-91ae6",
  storageBucket: "chat-app-91ae6.appspot.com",
  messagingSenderId: "270010118359",
  appId: "1:270010118359:web:969c691fa0922af7288092",
  measurementId: "G-LXL1SVCVJD"
};
  
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const auth= firebaseApp.auth();
  const db =  firebaseApp.database()
  const storage= firebaseApp.storage();
 

  export {auth,db,storage}