// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  var firebaseConfig = {
    apiKey: "AIzaSyBaJSkM3-a67fa_ukUhUzLIoCoKiflhI6E",
    authDomain: "marioplan-b682f.firebaseapp.com",
    databaseURL: "https://marioplan-b682f.firebaseio.com",
    projectId: "marioplan-b682f",
    storageBucket: "marioplan-b682f.appspot.com",
    messagingSenderId: "407061318286",
    appId: "1:407061318286:web:c7209282754121b36d57df",
    measurementId: "G-3R1W74V0QH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;