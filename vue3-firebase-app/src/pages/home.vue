<template>
  <div>
    <div class="text-h4">Home</div>
    <div>{{  $route.name  }}</div>
    <div>{{  $route.meta  }}</div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
<!-- route를 설정하는 옵션 -->
<route lang="yaml">
  name: home-page
  meta: 
    requiresAuth: true
</route>