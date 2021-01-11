// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjETnIF0il25ydVkr-qMsbXrqZ6oSSa9I",
  authDomain: "my-app-591f3.firebaseapp.com",
  databaseURL: "https://my-app-591f3.firebaseio.com",
  projectId: "my-app-591f3",
  storageBucket: "my-app-591f3.appspot.com",
  messagingSenderId: "858439756488",
  appId: "1:858439756488:web:8f32c59ed9afd83ad553fd",
  measurementId: "G-6CSTVZDV4B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
