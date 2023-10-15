<template>
  <!-- bordered : 상하 border -->
  <!-- separator: 자식요소의 border-bottom -->
  <q-list bordered separator>
    <!-- v-bind로 모든 객체(객채의 모든 속성)를 하위 컴포넌트로 보내줌  -->
    <PostItem
    v-for="item in items"
    :key="item.id"
    v-bind="item"
    />
  </q-list>
</template>

<script setup>

import PostItem from 'src/components/apps/post/PostItem.vue';
defineProps({
  items: {
    type: Array,
    default: () => [],
  }
})
</script>

<style lang="scss" scoped>

</style>