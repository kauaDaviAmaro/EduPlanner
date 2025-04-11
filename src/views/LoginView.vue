<template>
  <router-link to="/" class="back-link"> <i class="bx bx-arrow-back"></i> Voltar </router-link>

  <div class="login-page">
    <div class="login-container">
      <h1 class="logo">EduPlanner</h1>
      <h2>Entrar na sua conta</h2>

      <form @submit.prevent="handleLogin" novalidate>
        <!-- Email -->
        <div class="input-group" :class="{ error: emailError }">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <i class="bx bx-envelope"></i>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="exemplo@dominio.com"
              required
            />
          </div>
          <span v-if="emailError" class="error-text">Email inválido</span>
        </div>

        <!-- Senha -->
        <div class="input-group" :class="{ error: passwordError }">
          <label for="password">Senha</label>
          <div class="input-wrapper">
            <i class="bx bx-lock-alt"></i>
            <input
              id="passwordInput"
              v-model="password"
              type="password"
              placeholder="Digite sua senha"
              required
            />
            <i
              id="passwordIcon"
              class="bx bxs-show toggle-password"
              @click="showPassword"
              title="Mostrar/ocultar senha"
            ></i>
          </div>
          <span v-if="passwordError" class="error-text">Senha inválida</span>
        </div>

        <!-- Botão -->
        <button type="submit" class="btn">Entrar</button>

        <!-- Link de cadastro -->
        <p class="register-link">
          Ainda não tem uma conta?
          <router-link to="/register">Cadastre-se</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { LoginPayload } from '@/types/index';

const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const emailError = ref(false);
const passwordError = ref(false);

const handleLogin = async () => {
  if (!validateLogin()) return;

  const loginPayload: LoginPayload = {
    username: email.value,
    password: password.value,
  };

  await authStore.login(loginPayload);
};

const showPassword = () => {
  const passwordInput = document.querySelector('#passwordInput') as HTMLInputElement;
  const passwordIcon = document.querySelector('#passwordIcon') as HTMLElement;
  if (passwordInput && passwordIcon) {
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    passwordIcon.classList.toggle('bxs-show', !isHidden);
    passwordIcon.classList.toggle('bxs-hide', isHidden);
  }
};

const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateLogin = () => {
  emailError.value = !validateEmail(email.value);
  passwordError.value = password.value.trim() === '' || password.value.length < 5;
  return !emailError.value && !passwordError.value;
};
</script>

<style scoped>
.back-link {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.2rem;
  color: #807cff;
  text-decoration: none;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f8;
  padding: 2rem;
  min-height: 100vh;
  overflow: hidden;
}

.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #807cff;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: #333;
}

.input-group {
  margin-bottom: 1.4rem;
  text-align: left;
}

.input-group label {
  font-weight: 500;
  margin-bottom: 0.4rem;
  display: inline-block;
}

.input-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.6rem 0.8rem;
  background-color: #fdfdfd;
  transition: border 0.3s;
}

.input-wrapper input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
  background: transparent;
  margin-left: 0.5rem;
}

.input-wrapper i {
  color: #807cff;
  font-size: 1.2rem;
}

.toggle-password {
  cursor: pointer;
  margin-left: 0.5rem;
}

.input-group.error .input-wrapper {
  border-color: #ff5e5e;
}

.error-text {
  font-size: 0.85rem;
  color: #ff5e5e;
  margin-top: 0.3rem;
  display: block;
}

.btn {
  background-color: #807cff;
  color: white;
  border: none;
  padding: 0.8rem 1.4rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #6d68cc;
}

.register-link {
  margin-top: 1.5rem;
  font-size: 0.95rem;
}

.register-link a {
  color: #807cff;
  font-weight: 600;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
