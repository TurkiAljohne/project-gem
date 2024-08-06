
     // Import the functions you need from the SDKs you need
     import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
     import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7lR8aBMjcwHydddkTq8z7FAeQQaZcp88",
    authDomain: "project-tt-4158d.firebaseapp.com",
    databaseURL: "https://project-tt-4158d-default-rtdb.firebaseio.com",
    projectId: "project-tt-4158d",
    storageBucket: "project-tt-4158d.appspot.com",
    messagingSenderId: "921446040237",
    appId: "1:921446040237:web:15e655bd3ddba98654bc24"
  };

// Initialize Firebase
     const app = initializeApp(firebaseConfig);

//get ref to database services
      const db = getDatabase(app);

      document.getElementById("submit").addEventListener('click', function(e){
       e.preventDefault();
       set(ref(db, 'user/' + document.getElementById("username").value),
       {

         username: document.getElementById("username").value,
         email: document.getElementById("email").value,
         PhoneNumber: document.getElementById("phone").value

       });
         alert("Information Sent Successfully ");
      })