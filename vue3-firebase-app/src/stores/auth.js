import { defineStore } from "pinia";
import { computed, ref } from 'vue';


export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = computed(() => !!user.value);

  const setUser = (userData) => {
    console.log('userdata : ', userData);
    user.value = userData
    // user 정보가 있다면 user의 정보를 다시 설정
    // 사용자가 로그인 한 경우
    if(userData) {
      user.value = {
        uid: userData.uid,
        photoURL : userData.photoURL,
        displayName: userData.displayName,
        email : userData.email
      };
    // 로그아웃이 된 경우
    } else user.value = null;
  };
  

  return {
    user,
    setUser,
    isAuthenticated
  }
})