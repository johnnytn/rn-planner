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

console.log('process.env.apiKey')
console.log(process.env.FB_API_KEY)

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MSG_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID
};

/* if (!firebase.app.length) {
} */
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db }

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
