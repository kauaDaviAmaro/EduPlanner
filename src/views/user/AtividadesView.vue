<template>
  <main class="atividades-view">
    <h1>Minhas Atividades</h1>

    <div v-if="loading" class="loading">Buscando suas atividades...</div>

    <div v-else-if="atividades.length === 0" class="empty">
      Nenhuma atividade encontrada.
    </div>

    <div v-else class="atividades-list">
      <div class="card" v-for="atividade in atividades" :key="atividade.id">
        <i class="bx bx-file"></i>
        <span class="titulo">{{ atividade.titulo }}</span>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

interface Atividade {
  id: number
  titulo: string
}

const atividades = ref<Atividade[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await api.get('/atividades')
    atividades.value = data
  } catch (err) {
    console.error('Erro ao buscar atividades:', err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.atividades-view {
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

.atividades-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.card {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #807cff;
  transition: transform 0.2s ease;
  gap: 0.8rem;
}

.card:hover {
  transform: scale(1.02);
}

.card i {
  font-size: 1.5rem;
  color: #807cff;
}

.titulo {
  font-size: 1rem;
  color: #444;
}
</style>
