<template>
  <q-dialog
  :model-value="modelValue"
  transition-show="none"
  @update:model-value="val => $emit('update:modelValue', val)"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space /><!-- 우측 정렬-->
        <!-- v-close-popup : 퀘이샤에서 지원하는 popup창 닫기 -->
        <q-btn v-close-popup icon="close" flat round dense></q-btn>
      </q-card-section>

      <q-card-section class="q-px-xl q-pb-xl">
        <SignInForm
          v-if="viewMode == 'SignInForm'"
          @change-view="changeViewMode" 
        />
        <SignUpForm
          v-else-if="viewMode == 'SignUpForm'" 
          @change-view="changeViewMode"
        />
        <FindPasswordForm
          v-else @change-view="changeViewMode"
        />
      </q-card-section>

    </q-card>
  </q-dialog>
</template>

<script setup>
import SignInForm from './SignInForm.vue';
import SignUpForm from './SignUpForm.vue';
import FindPasswordForm from './FindPasswordForm.vue';

import { ref } from 'vue';
defineProps({
  modelValue: {
    type: Boolean,
    defalut: false,
  }
});
defineEmits(['update:modelValue']);

const viewMode = ref('SignInForm');
const changeViewMode = mode => {
  viewMode.value = mode;
}
</script>
