// database/firebaseDb.js

import * as firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyCnlaHbq0EtuTAypudes2fC39wp_uv42Es",
    authDomain: "hack-6eb70.firebaseapp.com",
    projectId: "hack-6eb70",
    storageBucket: "hack-6eb70.appspot.com",
    messagingSenderId: "398213329982",
    appId: "1:398213329982:web:e81a3e351144d68bd44d6f",
    measurementId: "G-R6582H6QK9"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;