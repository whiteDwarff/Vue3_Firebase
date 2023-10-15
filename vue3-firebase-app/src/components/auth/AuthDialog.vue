<template>
  <!--
    model-value : default에서 props로 받은 state
    update:model-value : state가 변경될 때 default로 변경된 state를 올려줌
      - v-close-popup 으로 인해 state 변경
  -->
  <q-dialog
  :model-value="modelValue"
  transition-show="none"
  @update:model-value="val => $emit('update:modelValue', val)"
  @hide="changeViewMode('SignInForm')"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section class="flex">
        <q-space /><!-- 우측 정렬-->
        <q-btn v-close-popup icon="close" flat round dense></q-btn>
      </q-card-section>

      <q-card-section class="q-px-xl q-pb-xl">
        <component
        :is="authViewComponents[viewMode]" 
        @change-view="changeViewMode"
        />
      </q-card-section>

    </q-card>
  </q-dialog>
</template>

<script setup>

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
