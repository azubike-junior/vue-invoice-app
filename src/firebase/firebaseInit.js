// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDTjD_o3axv2KMBwtGsc2kIJMjh5DboWf8",
  authDomain: "vue-tutorial-c2e07.firebaseapp.com",
  databaseURL: "https://vue-tutorial-c2e07-default-rtdb.firebaseio.com",
  projectId: "vue-tutorial-c2e07",
  storageBucket: "vue-tutorial-c2e07.appspot.com",
  messagingSenderId: "926706346081",
  appId: "1:926706346081:web:9b4c9e6e99b3df09686220"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db
