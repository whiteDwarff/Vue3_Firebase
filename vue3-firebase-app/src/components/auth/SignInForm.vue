<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSignInEmail">
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
        placeholder="비밀번호"
      />

      <div>
        <q-btn
          type="submit"
          label="로그인하기"
          class="full-width bg-primary text-white"
          unelevated
        />
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
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { signInWithGoogle, signInWithEmail } from 'src/service/auth';
const emit = defineEmits(['changeView', 'closeDialog']);

const $q = useQuasar();
// email login
const form = ref({
  email: '',
  password: ''
})
const handleSignInEmail = async () => {
  await signInWithEmail(form.value);
  $q.notify('환영합니다.');
  emit('closeDialog');
}
// google login 
const handleSignInGoogle = async () => {
  await signInWithGoogle();
  $q.notify('환영합니다 :]');
  emit('closeDialog');
}
</script>
