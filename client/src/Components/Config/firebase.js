import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCQCubpdQ-CNaYAQFKMN9o_oT2SwzNAIbg",
  authDomain: "summit-45861.firebaseapp.com",
  databaseURL: "https://summit-45861.firebaseio.com",
  projectId: "summit-45861",
  storageBucket: "summit-45861.appspot.com",
  messagingSenderId: "433673835583"
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const auth = firebase.auth();

export default firebase;
