import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PlanejamentoView from '@/views/user/PlanejamentoView.vue';
import UserLayout from '@/layouts/UserLayout.vue';

const routes = [
  { path: '/', component: HomeView },
  {
    path: '/',
    component: UserLayout,
    children: [
      { path: '/dashboard', component: () => import('@/views/user/UserDashboardView.vue') },
      { path: '/planejamento', component: PlanejamentoView },
      { path: '/atividades', component: () => import('@/views/user/AtividadesView.vue') },
      { path: '/biblioteca', component: () => import('@/views/user/BibliotecaView.vue') },
      { path: '/relatorios', component: () => import('@/views/user/RelatoriosView.vue') },
      { path: '/perfil', component: () => import('@/views/user/PerfilView.vue') },
      { path: '/sobre', component: () => import('@/views/user/SobreView.vue') },
      { path: '/ajuda', component: () => import('@/views/user/AjudaView.vue') },
    ],
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
