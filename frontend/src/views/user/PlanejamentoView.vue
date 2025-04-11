<template>
  <main class="planejamento-view">
    <h1>Meu Planejamento</h1>

    <div v-if="loading" class="loading">Carregando planejamentos...</div>

    <div v-else-if="planejamentos.length === 0" class="empty">
      Nenhum planejamento encontrado.
    </div>

    <div v-else class="planejamento-list">
      <div class="card" v-for="item in planejamentos" :key="item.id">
        <div class="data">{{ formatDate(item.data) }}</div>
        <div class="descricao">{{ item.descricao }}</div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

interface Planejamento {
  id: number
  data: string
  descricao: string
}

const planejamentos = ref<Planejamento[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await api.get('/planejamentos')
    planejamentos.value = data
  } catch (err) {
    console.error('Erro ao buscar planejamentos:', err)
  } finally {
    loading.value = false
  }
})

function formatDate(dateStr: string): string {
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
  return new Date(dateStr).toLocaleDateString('pt-BR', options)
}
</script>

<style scoped>
.planejamento-view {
  padding: 2rem;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.loading,
.empty {
  font-size: 1.1rem;
  color: #666;
}

.planejamento-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.card {
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #807cff;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.02);
}

.data {
  font-weight: bold;
  color: #807cff;
  margin-bottom: 0.5rem;
}

.descricao {
  color: #444;
}
</style>
