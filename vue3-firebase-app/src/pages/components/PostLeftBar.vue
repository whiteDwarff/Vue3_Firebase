<template>
  <StickySideBar>
      <q-card flat bordered>
        <q-list bordered separator>
          <!-- q-item엔 active가 있다, 현재 페이지엔 active class가 추가된다 ? -->
          <q-item v-ripple clickable :active="true">
            <q-item-section>전체</q-item-section>
          </q-item>
          <q-item v-for="cate in categories" :key="cate.value" v-ripple clickable>
            <q-item-section>{{ cate.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-card>
  </StickySideBar>
</template>

<script setup>
import StickySideBar from 'src/components/StickySideBar.vue';
import { getCategories } from 'src/service/category.js';

const categories = getCategories();
</script>

<style lang="scss" scoped>
.sticky-side-bar {
  position: sticky;
  top: 66px;
  z-index: 2;
  overflow-y: scroll;
  height: fit-content !important;
}
</style>