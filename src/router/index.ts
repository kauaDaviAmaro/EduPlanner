import { createRouter, createWebHistory } from 'vue-router';
import UserDashboardView from '@/views/user/UserDashboardView.vue';
import AdminDashboardView from '@/views/admin/AdminDashboardView.vue';
import LoginView from '@/views/LoginView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/user',
    component: UserDashboardView,
    meta: { requiresAuth: true, role: 'user' } // Proteção de rota
  },
  {
    path: '/admin',
    component: AdminDashboardView,
    meta: { requiresAuth: true, role: 'admin' } // Proteção de rota
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
