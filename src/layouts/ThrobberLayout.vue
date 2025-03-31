<script lang="ts" setup>
import { computed } from 'vue';
import { useLoadingStore } from '../stores/loadingStore';

const loadingStore = useLoadingStore();
const isLoading = computed(() => loadingStore.isLoading);
</script>

<template>
  <div class="overlay" v-if="isLoading">
    <div class="throbber"></div>
  </div>
</template>

<style>
.overlay {
  z-index: 999;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
}

.throbber {
  width: 40px;
  height: 40px;
  border: 5px solid var(--main-color);
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg); /* Começa na posição inicial */
  }
  100% {
    transform: rotate(360deg); /* Rotaciona 360 graus */
  }
}
</style>
