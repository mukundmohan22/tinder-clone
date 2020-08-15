import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKme5zEKXcHU6OB5ZYxkIAhtmMlsIEjcw",
  authDomain: "tinder-clone-a8fee.firebaseapp.com",
  databaseURL: "https://tinder-clone-a8fee.firebaseio.com",
  projectId: "tinder-clone-a8fee",
  storageBucket: "tinder-clone-a8fee.appspot.com",
  messagingSenderId: "538295586533",
  appId: "1:538295586533:web:4324d4ec7c9a55e62a8e0c",
  measurementId: "G-VLXKZWZG1F"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const database = firebaseapp.firestore();

export default database;