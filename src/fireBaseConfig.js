// import { ReactNativeFirebase } from '@react-native-firebase/app';
/* import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; */

import { initializeApp } from "firebase/app"
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";


// Optionally import the services that you want to use
// import "firebase/auth";
// import "firebase/database";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// firestore

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYrRdTsdyESB3tE4P6e-wTiB882-eAjkc",
  authDomain: "rn-planner-82a84.firebaseapp.com",
  projectId: "rn-planner-82a84",
  storageBucket: "rn-planner-82a84.appspot.com",
  messagingSenderId: "372165654337",
  appId: "1:372165654337:web:8779528f2a54fdf92f93c0",
  measurementId: "G-G3JJ60EMGM"
};

/* if (!firebase.app.length) {
} */
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db }

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
