import { boot } from 'quasar/wrappers'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaeO8jJldUTZuVaFAqtl3DK3UnMzLu2e0",
  authDomain: "munho-vue3-firebase-app.firebaseapp.com",
  projectId: "munho-vue3-firebase-app",
  storageBucket: "munho-vue3-firebase-app.appspot.com",
  messagingSenderId: "961442890563",
  appId: "1:961442890563:web:67e865868f9d43891125f6",
  measurementId: "G-Z38BFNRBVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
  auth,
}
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
})
