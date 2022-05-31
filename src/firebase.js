import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSU60H8KwJpr7ja1AXWNpRRPsTxC_wzWs",
    authDomain: "ubi-social-5a9a6.firebaseapp.com",
    projectId: "ubi-social-5a9a6",
    storageBucket: "ubi-social-5a9a6.appspot.com",
    messagingSenderId: "95497981078",
    appId: "1:95497981078:web:b7ab6d701fcaa5d59506b7",
    measurementId: "G-FD3ESEFDKF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;