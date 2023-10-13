<template>
  <div>
  <div class="text-h2">MyPage</div>
  <ul>
    <li>
      <router-link to="/mypage/profile">Profile</router-link>
    </li>
    <li>
      <router-link to="/mypage/password">Password</router-link>
    </li>
    <li>
      <router-link to="/mypage/bookmark">Bookmark</router-link>
    </li>
  </ul>
  <!-- child component -->
  <router-view></router-view>

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>