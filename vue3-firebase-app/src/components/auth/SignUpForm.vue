<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <q-form
      class="q-gutter-y-md"
      @submit.prevent="handleSubmit"
    >
      <q-input
        v-model="form.nickname"
        outlined
        dense 
        placeholder="닉네임" 
      />
      <q-input
        v-model="form.email"
        outlined
        dense 
        placeholder="email"
      />
      <q-input
        v-model="form.password"
        type="password"
        outlined
        dense
        placeholder="비밀번호(문자, 숫자 조합 8자 이상)" 
      />
      <q-btn
        type="submit"
        label="가입하기"
        class="full-width bg-primary text-white"
        unelevated 
        />
      <q-separator />
      <q-btn
        label="로그인하기"
        class="full-width"
        flat
        @click="$emit('changeView', 'SignInForm')"
      />   
    </q-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { signUpWithEmail } from 'src/service/';

const emit = defineEmits(['changeView', 'closeDialog']);
const form = ref({
  nickname: '',
  email: '',
  password: '',
})

// notify 
const $q = useQuasar();

const handleSubmit = async () => {
  await signUpWithEmail(form.value);
  $q.notify('이메일에서 인증 링크를 확인해주세요.');
  $q.notify('가입을 환영합니다.');
  emit('closeDialog');
}
/*
notify : 알림탭 
quasar.config.js에서 하단 코드 설정 후 사용 가능 

plugins: ['Notify'],
framework: {
  config: {
    notify: {position: 'top' }
  },
  ...
}
*/
</script>
