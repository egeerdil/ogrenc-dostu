import firebase from "firebase"


var firebaseConfig = {
    apiKey: "AIzaSyDMkW_l8W-_4b7TM06nMGZzPG0tCvd6zPI",
    authDomain: "ogrencidostu-fbde6.firebaseapp.com",
    projectId: "ogrencidostu-fbde6",
    storageBucket: "ogrencidostu-fbde6.appspot.com",
    messagingSenderId: "470316470653",
    appId: "1:470316470653:web:43ad1a62d6451baf76fc14"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
