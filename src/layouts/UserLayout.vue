<template>
  <div class="layout">
    <aside class="sidebar" :class="{ collapsed }">
      <div class="top">
        <button class="menu-toggle" @click="toggleSidebar">
          <i class="bx bx-menu"></i>
        </button>
        <div class="logo" v-if="!collapsed">EduPlanner</div>
      </div>

      <nav>
        <router-link to="/dashboard" exact-active-class="active">
          <i class="bx bx-home-alt"></i>
          <span v-if="!collapsed">Início</span>
        </router-link>
        <router-link to="/planejamento" exact-active-class="active">
          <i class="bx bx-calendar"></i>
          <span v-if="!collapsed">Planejamentos</span>
        </router-link>
        <router-link to="/atividades" exact-active-class="active">
          <i class="bx bx-task"></i>
          <span v-if="!collapsed">Minhas Atividades</span>
        </router-link>
        <router-link to="/biblioteca" exact-active-class="active">
          <i class="bx bx-book-open"></i>
          <span v-if="!collapsed">Biblioteca</span>
        </router-link>
        <router-link to="/relatorios" exact-active-class="active">
          <i class="bx bx-bar-chart-square"></i>
          <span v-if="!collapsed">Relatórios</span>
        </router-link>
        <router-link to="/perfil" exact-active-class="active">
          <i class="bx bx-user"></i>
          <span v-if="!collapsed">Perfil</span>
        </router-link>
      </nav>

      <div class="logout">
        <button @click="logout">
          <i class="bx bx-log-out"></i>
          <span v-if="!collapsed">Sair</span>
        </button>
      </div>
    </aside>

    <section class="content">
      <RouterView />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '@/services/auth';

const collapsed = ref(true);
const router = useRouter();

function toggleSidebar() {
  collapsed.value = !collapsed.value;
}

async function logout() {
  await authService.logout();
  localStorage.removeItem('token');
  router.push('/login');
}
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  background-color: #1e293b;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 240px;
  transition: width 0.3s;
}

.sidebar.collapsed {
  width: 70px;
  align-items: center;
}

.sidebar .top {
  display: flex;
  margin-bottom: 2rem;
}

.menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-left: 0.5rem;
}

nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

nav a {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #cbd5e1;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  transition: background 0.3s;
  white-space: nowrap;
}

nav a:hover {
  background-color: #334155;
  color: white;
}

nav a.active {
  background-color: #807cff81;
  color: white;
}

nav i {
  font-size: 1.2rem;
}

.logout {
  margin-top: auto;
  text-align: center;
  padding-top: 1rem;
}

.logout button {
  background: none;
  border: none;
  color: #f87171;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0.5rem 1rem;
  transition: color 0.2s;
  justify-content: center;
}

.logout button:hover {
  color: #f43f5e;
}

.content {
  flex: 1;
  background-color: #f8fafc;
  padding: 2rem;
  overflow-y: auto;
}
</style>
