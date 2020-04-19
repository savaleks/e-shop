import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDsIK2f3II-baxe95qHPgUzZGg53vBRr0U",
    authDomain: "shop-db-e3789.firebaseapp.com",
    databaseURL: "https://shop-db-e3789.firebaseio.com",
    projectId: "shop-db-e3789",
    storageBucket: "shop-db-e3789.appspot.com",
    messagingSenderId: "564768586407",
    appId: "1:564768586407:web:d298c1716254712559f982",
    measurementId: "G-02Z7F7PYFE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  // choice an account from popup list
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
