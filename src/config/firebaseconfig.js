//import firebase from 'firebase';
import {initializeApp} from 'firebase/app'
import { getFirestore, collection, getDocs } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCrpRUvlL0y3wlPBQwMN9aF9FWsjtsZmcA",
    authDomain: "task-2845f.firebaseapp.com",
    projectId: "task-2845f",
    storageBucket: "task-2845f.appspot.com",
    messagingSenderId: "369229576381",
    appId: "1:369229576381:web:13a8d1188df6c8629c9fd4"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export {app, database, getFirestore, collection, getDocs};