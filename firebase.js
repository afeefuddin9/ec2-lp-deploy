var firebaseConfig = {
    apiKey: "AIzaSyApOJNqFe8XvE4TkKGbUmSCLyCCeyEEEVk",
    authDomain: "clone-c2e4b.firebaseapp.com",
    projectId: "clone-c2e4b",
    storageBucket: "clone-c2e4b.appspot.com",
    messagingSenderId: "555587270334",
    appId: "1:555587270334:web:d5b861b7f855539c1750ef",
    measurementId: "G-7C42ES0C96"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();