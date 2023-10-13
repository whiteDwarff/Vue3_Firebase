<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">비밀번호 찾기</div>
    <q-form class="q-gutter-y-md">
      <q-input outlined dense  placeholder="가입한 이메일" />
      <q-btn label="확인" class="full-width bg-primary text-white" unelevated></q-btn>
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
defineEmits(['changeView']);
</script>
