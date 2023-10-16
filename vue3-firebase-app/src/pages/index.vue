<template>
  <!-- src/layouts/default.vue에 랜더링되는 페이지 -->
  <q-page padding>
    <div>
      <div class="row q-col-gutter-x-lg">
        <PostLeftBar class="col-grow"/>
        
        <section class="col-7">
          <PostHeader />
          <PostList :items="posts"/>
        </section>

        <PostRightBar class="col-3" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';
import PostHeader from './components/PostHeader.vue';
import PostLeftBar from './components/PostLeftBar.vue';
import PostRightBar from './components/PostRightBar.vue';

const posts = Array.from(Array(20), (_, index) => ({
  id: index,
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

<style lang="scss" scoped></style>
