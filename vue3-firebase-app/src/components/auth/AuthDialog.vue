<template>
  <q-dialog
  :model-value="modelValue"
  transition-show="none"
  @update:model-value="val => $emit('update:modelValue', val)"
  @hide="changeViewMode('SignInForm')"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space /><!-- 우측 정렬-->
        <!-- v-close-popup : 퀘이샤에서 지원하는 popup창 닫기 -->
        <q-btn v-close-popup icon="close" flat round dense></q-btn>
      </q-card-section>

      <q-card-section class="q-px-xl q-pb-xl">
        <!-- v-if를 활용한 조건부 랜더링 -->
        <!-- <SignInForm
          v-if="viewMode == 'SignInForm'"
          @change-view="changeViewMode" 
        />
        <SignUpForm
          v-else-if="viewMode == 'SignUpForm'" 
          @change-view="changeViewMode"
        />
        <FindPasswordForm
          v-else @change-view="changeViewMode"
        /> -->
        <!-- dynamic component
        :is=  동적으로 변경되는 구성 요소의 유형을 결정하는데 사용
        -->
        <component
        :is="authViewComponents[viewMode]" 
        @change-view="changeViewMode"
        />
      </q-card-section>

    </q-card>
  </q-dialog>
</template>

<script setup>
// import SignInForm from './SignInForm.vue';
// import SignUpForm from './SignUpForm.vue';
// import FindPasswordForm from './FindPasswordForm.vue';

import { ref, defineAsyncComponent } from 'vue';
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
// const authViewComponents = {
//   SignInForm,
//   SignUpForm,
//   FindPasswordForm,
// }

/*
defineAsyncComponent: 
  - 사용되지 않는 컴포넌트들의 로딩을 하지 않고 비동기 로직(클릭, 컴포넌트 이동) 시 필요한 컴포넌트를 랜더링
*/
const authViewComponents = {
  SignInForm: defineAsyncComponent(() => import('./SignInForm.vue')),
  SignUpForm: defineAsyncComponent(() => import('./SignUpForm.vue')),
  FindPasswordForm: defineAsyncComponent(() => import('./FindPasswordForm.vue')),
}
</script>
