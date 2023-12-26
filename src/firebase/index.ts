import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCqf_uMapEXSQ1BJYoiTO0qOMWGaKd2x84",
  authDomain: "sammi-auth-4e115.firebaseapp.com",
  projectId: "sammi-auth-4e115",
  storageBucket: "sammi-auth-4e115.appspot.com",
  messagingSenderId: "137116562479",
  appId: "1:137116562479:web:bf8ffebc2138b217bd02da"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const auth = getAuth();

export default app;

export {db, auth}