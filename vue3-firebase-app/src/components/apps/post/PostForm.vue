<template>
  <q-form>
    <q-card-section class="q-gutter-y-sm">
      <q-input v-model="titleModel" outlined autofocus label="제목" />
      <!-- q-select : select 요소 생성, :options="" select요소의 Option을 바인딩 -->
      <q-select v-model="categoryModel" outlined :options="categories" emit-value map-options>
        <template v-if="!categoryModel" #selected>
          <span class="text-grey-7">카테고리를 선택하세요.</span>
        </template>
      </q-select>
      <q-input v-model="contentModel" type="textarea" outlined label="내용을 작성해주세요." />
      <q-input v-model="tagFields" outlined prefix="#" label="태그를 입력해주세요. (입력 후 Enter)" />
      <q-chip outline dense removable color="teal" @remove="removeTag">vue.js
      </q-chip>
    </q-card-section>

    <q-card-actions align="right">
      <slot name="actions">
        <q-btn v-close-popup flat label="취소하기" />
        <q-btn type="submit" flat label="저장하기" color="primary" />
      </slot>
    </q-card-actions>
  </q-form>
</template>

<script setup>
import { computed, ref } from 'vue';
import { getCategories } from 'src/service/category.js';

const props = defineProps({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  content: {
    type: String,
  },
  tags: {
    type: Array,
    default: () => [],
  }
})
const emit = defineEmits([
  'update:title',
  'update:category',
  'update:content',
  'update:tags',
])

const categories = getCategories();
const titleModel = computed({
  get: () => props.title,
  set: (val) => emit('update:title', val)
})
const categoryModel = computed({
  get: () => props.category,
  set: (val) => emit('update:category', val)
})
const contentModel = computed({
  get: () => props.content,
  set: (val) => emit('update:content', val)
})
const tagFields = ref('');
const removeTag = () => {
  console.log('removeTag');
}
</script>

<style lang="scss" scoped></style>