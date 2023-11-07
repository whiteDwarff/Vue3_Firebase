<template>
  <div class="q-gutter-y-md">

    <BaseCard>
      <q-form @submit.prevent="handleSubmitProfile">
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">프로필 변경</div>
          <q-input v-model="displayName" outlined dense label="닉네임" />
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-space />
          <q-btn type="submit" label="저장하기" flat color="primary" />
        </q-card-actions>
      </q-form>
    </BaseCard>

    <BaseCard>
      <q-form @submit.prevent="handleSubmitEmail">
        <q-card-section class="q-gutter-y-md">
          <div class="text-h6">이메일 변경</div>
          <q-input v-model="email" outlined dense label="이메일" />
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-space />
          <q-btn type="submit" label="저장하기" flat color="primary" />
        </q-card-actions>
      </q-form>
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from 'src/components/base/BaseCard.vue';
import { updateUserProfile, updateUserEmail } from 'src/service/index'
import { useAuthStore } from 'src/stores/auth';
import { useQuasar } from 'quasar';
import { ref, watchEffect } from 'vue';

const authStore = useAuthStore();
const $q = useQuasar();
const displayName = ref('');
const email = ref('');

// ---------------------------------------------
// 닉네임과 이메일 변경 로직
const handleSubmitProfile = async () => {
  await updateUserProfile(displayName.value);
  $q.notify('닉네임이 변경되었습니다.')
}
const handleSubmitEmail = async () => {
  try {
    await updateUserEmail(email.value);
    $q.notify('이메일이 변경되었습니다.')
  } catch (err){ 
    console.log(err.message);
  }
}
// ---------------------------------------------
// pinia에 저장된 user 객체의 displayName과 email을 할당
// watchEffect : 반응형 상태의 데이터변화에 반응함
watchEffect(() => {
  // 옵셔널체이닝 ? 
  // 참조가 null 이나 undefined라면 에러가 발생하지 않고 undefined를 return 
  // 새로고침 시 pinia에 저장된 user 정보가 삭제됨 
  displayName.value = authStore.user?.displayName;
  email.value = authStore.user?.email;
})
</script>

<style lang="scss" scoped></style>