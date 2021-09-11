import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAblRdPSJwiBNK9X4ZJbMd7e7qq-CCqfnY",
    authDomain: "book-santa-3fc9e.firebaseapp.com",
    projectId: "book-santa-3fc9e",
    storageBucket: "book-santa-3fc9e.appspot.com",
    messagingSenderId: "807149976615",
    appId: "1:807149976615:web:0010c81f5919f9795c2202"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   export default firebase.firestore()