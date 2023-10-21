<template>
  <q-page>
    <BaseCard>
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
      </q-toolbar>

      <q-separator />
      <PostForm
        v-model:title="form.title"
        v-model:content="form.content"
        v-model:category="form.category"
      >
      <template #actions>
        <q-btn v-close-popup flat label="취소" />
        <q-btn type="submit" flat label="수정" color="primary" />
      </template>
      </PostForm>
      <q-separator />

    </BaseCard>
  </q-page>
</template>

<!-- form의 데이터를 재사용이 용이하도록 관리 (factory method) -->
<script>
const form = () => ({
  title: '',
  category: '',
  content: '',
  tags: [],
})
</script>
<script setup>
import BaseCard from 'src/components/base/BaseCard.vue';
import PostForm from 'src/components/apps/post/PostForm.vue';

</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta: 
  width: 800px
</route>