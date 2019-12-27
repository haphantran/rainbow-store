import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOb6J1SsvuXb4pLzyALcSbzKkzC-z1mfY",
  authDomain: "rainbow-store-db.firebaseapp.com",
  databaseURL: "https://rainbow-store-db.firebaseio.com",
  projectId: "rainbow-store-db",
  storageBucket: "rainbow-store-db.appspot.com",
  messagingSenderId: "461327897710",
  appId: "1:461327897710:web:4d914da9a79dcbeb34427f",
  measurementId: "G-SWBRMVT4SY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
