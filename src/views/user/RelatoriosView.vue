<template>
  <main class="relatorios-view">
    <h1>Relatórios</h1>

    <div v-if="loading" class="loading">Gerando relatório...</div>

    <div v-else class="relatorio-cards">
      <div class="card">
        <i class="bx bx-download"></i>
        <div class="info">
          <p class="valor">{{ relatorio.baixadas }}</p>
          <p class="label">Atividades baixadas</p>
        </div>
      </div>

      <div class="card">
        <i class="bx bx-folder-plus"></i>
        <div class="info">
          <p class="valor">{{ relatorio.planejamentos }}</p>
          <p class="label">Planejamentos criados</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import api from '@/services/api'

interface Relatorio {
  baixadas: number
  planejamentos: number
}

const relatorio = ref<Relatorio>({ baixadas: 0, planejamentos: 0 })
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await api.get('/relatorios')
    relatorio.value = data
  } catch (err) {
    console.error('Erro ao gerar relatório:', err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.relatorios-view {
  padding: 2rem;
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.loading {
  font-size: 1.1rem;
  color: #666;
}

.relatorio-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.card {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 10px;
  border-left: 5px solid #807cff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  gap: 1rem;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.02);
}

.card i {
  font-size: 2rem;
  color: #807cff;
}

.info {
  display: flex;
  flex-direction: column;
}

.valor {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.label {
  font-size: 0.95rem;
  color: #666;
}
</style>
