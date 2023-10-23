// google로 로그인 하기 

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "src/boot/firebase";

// HTTP 통신하기
export async function signInWithGoogle() {
  // google의 객체 인스턴스 생성 
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
}

export async function logout() {
  await signOut(auth);
}