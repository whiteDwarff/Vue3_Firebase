<template>
  <div>
    <div class="text-h2">Admin Layout</div>
    <router-view/>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
<!-- 
  Nested layout의 컴파일 순서
  1. layout 폴더 내 하위 동일한 파일 이름
  2. pages 하위 동일한 파일 이름
  3. pages의 하위 폴더 중 동일한 파일이름
 -->