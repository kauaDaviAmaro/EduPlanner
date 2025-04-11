<template>
  <main class="biblioteca-view">
    <h1>Biblioteca</h1>

    <div v-if="loading" class="loading">Carregando biblioteca...</div>

    <div v-else-if="biblioteca.length === 0" class="empty">
      Nenhum recurso disponível na biblioteca.
    </div>

    <div v-else class="biblioteca-list">
      <div class="card" v-for="item in biblioteca" :key="item.id">
        <i class="bx bx-book"></i>
        <div class="info">
          <div class="nome">{{ item.nome }}</div>
          <div class="disciplina">{{ item.disciplina }}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

interface Recurso {
  id: number
  nome: string
  disciplina: string
}

const biblioteca = ref<Recurso[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await api.get('/biblioteca')
    biblioteca.value = data
  } catch (err) {
    console.error('Erro ao carregar biblioteca:', err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.biblioteca-view {
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

.biblioteca-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.card {
  display: flex;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #807cff;
  gap: 0.8rem;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.02);
}

.card i {
  font-size: 1.6rem;
  color: #807cff;
  margin-top: 2px;
}

.info {
  display: flex;
  flex-direction: column;
}

.nome {
  font-weight: bold;
  color: #333;
  font-size: 1rem;
}

.disciplina {
  font-size: 0.9rem;
  color: #666;
}
</style>
