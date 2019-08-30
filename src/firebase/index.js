import firebase from "firebase/app";
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCNzjKgf8fD4KMYm_DR7rLHRgF9PFcElOk",
  authDomain: "gb-fantasy-bfl.firebaseapp.com",
  databaseURL: "https://gb-fantasy-bfl.firebaseio.com",
  projectId: "gb-fantasy-bfl",
  storageBucket: "gb-fantasy-bfl.appspot.com",
  messagingSenderId: "1025436061529",
  appId: "1:1025436061529:web:3ea1fc450f94fa42"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
  storage, firebase as default
}
