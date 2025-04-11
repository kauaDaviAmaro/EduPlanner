<template>
  <main>
    <h1>Meu Perfil</h1>
    <p v-if="loading">Carregando informações...</p>
    <div v-else>
      <p><strong>Nome:</strong> {{ perfil.nome }}</p>
      <p><strong>Email:</strong> {{ perfil.email }}</p>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

interface Perfil {
  nome: string
  email: string
}

const perfil = ref<Perfil>({ nome: '', email: '' })
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('/api/perfil')
    perfil.value = await res.json()
  } catch (err) {
    console.error('Erro ao carregar perfil:', err)
  } finally {
    loading.value = false
  }
})
</script>
