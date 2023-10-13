<template>
  <q-layout view="lHh Lpr lff" class="bg-grey-2">
  <!-- quasar 사용 시 반드시 root 태그는 q로 시작되는 quasar 태그로 시작해야함 -->
    <!-- 
      bordered : border-bottom
      bg-white : backgroud-color: #fff
      text-grey-9 : color: grey
  -->
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="/favicon.ico">
            </q-avatar>
            코딩 클럽
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <!-- 컴포넌트로 이동: to="route 경로", 외부경로 이동: href="외부경로" label="": innerText-->
        <q-btn stretch flat label="Home" to="/home"/>
        <q-btn stretch flat label="수강하기" href="https://google.com" target="_black" /> 
        <q-btn stretch flat label="온라인 강의" href="https://naver.com" target="_black" /> 
        <q-btn stretch flat label="유튜브" href="https://youtube.com" target="_black" /> 
        <!-- q-separator : | -->
        <q-separator class="q-my-md q-mr-md" vertical />
        <!--
          unelevated : 그림자 제거 
          rounded    : 모서리 둥글게
          color=""   : 배경색상 변경
          -->
        <q-btn unelevated rounded color="primary" label="로그인 / 회원가입" @click="openAuthDialog"/>
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>
    <AuthDialog v-model="authDialog"/>
  </q-layout>
</template>
<script setup>
import { computed, ref } from 'vue';
import {useRoute} from 'vue-router'

import AuthDialog from 'src/components/auth/AuthDialog.vue';

const route = useRoute();
const pageContainerStyles = computed(() => ({
  //옵셔널 체이닝(Null 병합 연산자)을 사용하여 route.meta 객체에서 width 속성을 가져온다
  // route.meta가 존재하지 않거나 width가 정의되지 않은 경우 null이 아닌 Undefined를 return하여 or 연산자와 비교함
  maxWidth: route.meta?.width || '1080px',
  margin: '0 auto'
}));

const authDialog = ref(true);
const openAuthDialog = () => authDialog.value = true;
</script>