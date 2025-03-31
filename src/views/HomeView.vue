<script setup lang="ts">
import NavbarLayout from '@/layouts/NavbarLayout.vue';
</script>

<template>
  <NavbarLayout />
  <div class="banner">
    <img src="@/assets/imgs/EduPlanner.png" alt="" srcset="">
  </div>
</template>

<style scoped>
.banner img {
  width: 100%;
  height: calc(100vh - 60px);
  max-width: 100%;
  max-height: 100%;
  user-select: none;
}
</style>
