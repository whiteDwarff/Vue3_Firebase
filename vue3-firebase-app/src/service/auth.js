// google로 로그인 하기 

import { 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail } from "firebase/auth";
import { auth } from "src/boot/firebase";

const DEFAULT_PHOTO_URL =
  'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=';

export function defaultPhotoURL(uid) {
    return`${DEFAULT_PHOTO_URL}${uid}`;
}
// 구글로 가입하기
export async function signInWithGoogle() {
  // google의 객체 인스턴스 생성 
  const provider = new GoogleAuthProvider();
  const { user } = await signInWithPopup(auth, provider);
  return user;
}
// 로그아웃
export async function logout() {
  await signOut(auth);
}
// 이메일로 가입하기
export async function signUpWithEmail({ email, password, nickname }){
  // auth, id, password가 매개변수로 필요
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    // user의 profile을 설정
    // user, {display, photoURL}이 매개변수로 필요
    // displayName과 photoURL은 String 값
    await updateProfile(user, {
      displayName: nickname,
      photoURL: `${DEFAULT_PHOTO_URL}${user.uid}`,
    })
  } catch(err) {
    console.log(err.message);
  }
}
// 이메일로 로그인
export async function signInWithEmail({email, password}) {
  const { user } = signInWithEmailAndPassword(auth, email, password);
  return user;
}
// 비밀번호 찾기
export async function sendPasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch(err) {
    console.log(err.message);
  }
}