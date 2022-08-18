import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

var credential =  {
    apiKey: "AIzaSyAPNZpW8AIqaC4ICNApcrmB61AsXhBsKSk",
    authDomain: "boda-stock.firebaseapp.com",
    projectId: "boda-stock",
    storageBucket: "boda-stock.appspot.com",
    messagingSenderId: "142387305101",
    appId: "1:142387305101:web:05ca80536125283fe360c4",
    measurementId: "G-ZP0F4HXNJE"
  };

const fb = firebase.initializeApp(credential);
const db = fb.firestore()
export default db