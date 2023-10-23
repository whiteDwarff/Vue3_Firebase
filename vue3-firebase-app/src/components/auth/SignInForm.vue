<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md">
      <q-input outlined dense  placeholder="email" />
      <q-input outlined dense placeholder="비밀번호" />

      <div>
        <q-btn label="로그인하기" class="full-width bg-primary text-white" unelevated></q-btn>
        <div class="flex justify-between q-mt-md">
          <q-btn
            label="비밀번호 찾기"
            class="text-secondary"
            unelevated
            size="13px"
            @click="$emit('changeView', 'FindPasswordForm')"
          />
          <q-btn
            label="이메일 가입하기"
            class="text-secondary"
            unelevated size="13px"
            @click="$emit('changeView', 'SignUpForm')"
          />
        </div>
      </div>
      
        <q-separator />
      <q-btn
        label="구글 계정으로 로그인하기"
        class="full-width text-primary"
        outline
        @click="handleSignInGoogle"
      />
    </q-form>
  </div>
</template>

<script setup>
import { signInWithGoogle } from 'src/service/auth';
defineEmits(['changeView']);

// google login 
const handleSignInGoogle = async () => {
  await signInWithGoogle();
}
</script>
