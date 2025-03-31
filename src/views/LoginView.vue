<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { LoginPayload } from '@/types/index';

import Button from 'primevue/button';

const authStore = useAuthStore();

const email = ref('');
const password = ref('');

const handleLogin = async () => {
  const loginPayload: LoginPayload = {
    username: email.value,
    password: password.value,
  };

  await authStore.login(loginPayload);
  alert('Login realizado com sucesso!');
};
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Senha" required />
      <Button label="Submit" type="submit" />
    </form>
  </div>
</template>
