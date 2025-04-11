<template>
  <main>
    <h1>Bem-vindo ao EduPlanner!</h1>
    <p v-if="loading">Carregando dados...</p>
    <div v-else>
      <p>Total de atividades disponíveis: {{ totalAtividades }}</p>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const totalAtividades = ref(0)

onMounted(async () => {
  try {
    // Simulação de chamada à API
    const response = await fetch('/api/dashboard/overview')
    const data = await response.json()
    totalAtividades.value = data.totalAtividades
  } catch (err) {
    console.error('Erro ao carregar dados do dashboard:', err)
  } finally {
    loading.value = false
  }
})
</script>
