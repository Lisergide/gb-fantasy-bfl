import firebase from "firebase/app";
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "gb-fantasy-bfl.firebaseapp.com",
  databaseURL: "https://gb-fantasy-bfl.firebaseio.com",
  projectId: "gb-fantasy-bfl",
  storageBucket: "gb-fantasy-bfl.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default
}
