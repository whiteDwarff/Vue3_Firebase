<template>
  <!-- persistent: background를 클릭해도 팝업이 닫히지 않음 -->
  <q-dialog persistent v-bind="$attrs" @hide="onHide">
    <q-card :style="{ width: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <!-- v-close-popup: 팝업을 닫을 수 있는 옵션  -->
        <q-btn v-close-popup flat round dense icon="close"></q-btn>
      </q-toolbar>

      <q-separator />

      <PostForm
        v-model:title="form.title"
        v-model:content="form.content"
        v-model:category="form.category"
      />

      <q-separator />

   

    </q-card>
  </q-dialog>
</template>

<!-- form의 데이터를 재사용이 용이하도록 관리 (factory method) -->
<script>
const getInitialForm = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
})
</script>
<script setup>
import { ref } from 'vue'
import { getCategories } from 'src/service/category.js';
import PostForm from './PostForm.vue';

const form = ref(getInitialForm())

const onHide = () => {
  form.value = getInitialForm();
  tagFields.value = '';
}
</script>

<style lang="scss" scoped></style>