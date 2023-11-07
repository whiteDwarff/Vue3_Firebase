import { boot } from 'quasar/wrappers'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthStore } from 'src/stores/auth';

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

export default boot(async (/* { app, router, ... } */) => {
  const authStore = useAuthStore();

  // 로그인과 로그아웃 시 사용자의 정보를 가져올 수 있음
  // 첫번째 인자로 auth 객체, 두번째 인자로 callback (user정보)를 사용
  onAuthStateChanged(auth, user => {
    authStore.setUser(user);
    console.log('user : ', user);
  });
});
