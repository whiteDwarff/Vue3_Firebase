<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md">
      <q-input outlined dense  placeholder="닉네임" />
      <q-input outlined dense  placeholder="email" />
      <q-input outlined dense placeholder="비밀번호(문자, 숫자 조합 8자 이상)" />
      <q-btn label="가입하기" class="full-width bg-primary text-white" unelevated />
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
