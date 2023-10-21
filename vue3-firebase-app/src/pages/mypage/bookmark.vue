<template>
  <PostList :items="posts" />
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';

const posts = Array.from(Array(3), (_, index) => ({
  id: 'A' +  index,
  title: `Vue3 Firebase 강의 ${index}`,
  content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, ea labore sed ex quidem nesciunt, obcaecati aut eveniet sint cupiditate eligendi, voluptas libero corrupti doloribus quasi neque ullam sunt magnam.',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookMarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: `카테고리${index}`,
}));

</script>

<style lang="scss" scoped>

</style>