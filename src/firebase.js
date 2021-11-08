import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAClsuDbSfaulwRJaB5p2h-SV9mJPkuH1U",
  authDomain: "salam-messenger-5f2ee.firebaseapp.com",
  projectId: "salam-messenger-5f2ee",
  storageBucket: "salam-messenger-5f2ee.appspot.com",
  messagingSenderId: "814198991256",
  appId: "1:814198991256:web:6a35c0085f86f5af0563ed"
}).auth();