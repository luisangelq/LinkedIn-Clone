import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgXNXdlLvarrCV6invCkmapF14exY2W-Y",
  authDomain: "linkedin-clone-3a5f9.firebaseapp.com",
  projectId: "linkedin-clone-3a5f9",
  storageBucket: "linkedin-clone-3a5f9.appspot.com",
  messagingSenderId: "1025497377576",
  appId: "1:1025497377576:web:fbecdde489f7840326fe1d",
  measurementId: "G-48MJ160KSZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, db, provider, storage };
