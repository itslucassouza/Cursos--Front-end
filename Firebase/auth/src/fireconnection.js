import firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyCkJeIAxo280Rv38GYG6JNdloAc0rwR44A",
    authDomain: "reactapp-2d834.firebaseapp.com",
    databaseURL: "https://reactapp-2d834.firebaseio.com",
    projectId: "reactapp-2d834",
    storageBucket: "reactapp-2d834.appspot.com",
    messagingSenderId: "260440957367",
    appId: "1:260440957367:web:0d28d16c60b51e9e25c832",
    measurementId: "G-MZS97Z7PJR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;