<template>
  <main class="dashboard">
    <section class="greeting">
      <h1>Olá, {{ userName }} 👋</h1>
      <p>Que bom te ver por aqui novamente!</p>
    </section>

    <section class="summary">
      <h2>Resumo</h2>
      <div class="summary-grid">
        <div class="summary-card">
          <strong>{{ atividadesCount }}</strong>
          <span>Atividades salvas</span>
        </div>
        <div class="summary-card">
          <strong>{{ planejamentosCount }}</strong>
          <span>Planejamentos criados</span>
        </div>
      </div>
    </section>

    <section class="shortcuts">
      <h2>Atalhos rápidos</h2>
      <div class="shortcut-grid">
        <router-link to="/planejamento" class="shortcut-card">
          <img src="@/assets/imgs/dashboard/planejamento.png" />
          Planejamento
        </router-link>
        <router-link to="/atividades" class="shortcut-card">
          <img src="@/assets/imgs/dashboard/atividades.png" />
          Minhas Atividades
        </router-link>
        <router-link to="/biblioteca" class="shortcut-card">
          <img src="@/assets/imgs/dashboard/biblioteca.png" />
          Biblioteca
        </router-link>
        <router-link to="/relatorios" class="shortcut-card">
          <img src="@/assets/imgs/dashboard/relatorio.png" />
          Relatórios
        </router-link>
      </div>
    </section>

    <section class="suggestions">
      <h2>Sugestões de atividades</h2>
      <ul>
        <li>📘 Atividade de interpretação de texto - 3º ano</li>
        <li>🧮 Problemas de matemática - 5º ano</li>
        <li>🌎 Jogo de localização geográfica - 6º ano</li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { authService } from '@/services/auth'
import { dashboardService } from '@/services/dashboard'

const userName = ref('Professor')
const atividadesCount = ref(0)
const planejamentosCount = ref(0)

onMounted(async () => {
  try {
    const user = await authService.getCurrentUser()
    userName.value = user.name || 'Professor'

    const resumo = await dashboardService.getResumo()
    atividadesCount.value = resumo.atividades
    planejamentosCount.value = resumo.planejamentos
  } catch (err) {
    console.error('Erro ao carregar dashboard:', err)
  }
})
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.greeting h1 {
  font-size: 2rem;
  margin-bottom: 0.25rem;
}

.greeting p {
  color: #666;
}

.summary h2,
.shortcuts h2,
.suggestions h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.summary-grid {
  display: flex;
  gap: 1.5rem;
}

.summary-card {
  background: #f0f4f8;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  flex: 1;
}

.summary-card strong {
  font-size: 2rem;
  color: #0077b6;
  display: block;
}

.shortcut-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}

.shortcut-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ecf0f2;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  color: #333;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.shortcut-card:hover {
  transform: translateY(-4px);
}

.shortcut-card img {
  width: 36px;
  margin-bottom: 0.5rem;
}

.suggestions ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.suggestions li {
  margin-bottom: 0.5rem;
  background: #f9fbfc;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-left: 4px solid #0077b6;
}
</style>
