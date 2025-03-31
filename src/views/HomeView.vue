<script setup lang="ts">
import NavbarLayout from '@/layouts/NavbarLayout.vue';
</script>

<template>
  <NavbarLayout />
  <div class="banner"></div>
</template>

<style scoped>
.banner {
  background-image: url('@/assets/imgs/EduPlanner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

@media only screen and (max-width: 700px) {
  .banner {
    background-image: url('@/assets/imgs/EduPlannerMobile.png');
  }
}
</style>
