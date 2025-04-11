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
  if (!validateLogin()) {
    return;
  }

  const loginPayload: LoginPayload = {
    username: email.value,
    password: password.value,
  };

  await authStore.login(loginPayload);
};

const showPassword = () => {
  const passwordInput = document.querySelector('#passwordInput') as HTMLInputElement;
  const passwordIcon = document.querySelector('#passwordIcon  ') as HTMLElement;
  if (passwordInput) {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordIcon.classList.toggle('bxs-show');
    passwordIcon.classList.toggle('bxs-hide');
  }
};

const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

const validateLogin = () => {
  emailError.value = !validateEmail(email.value);
  passwordError.value = password.value.trim() === '' || password.value.lenght < 5;

  return emailError.value && !passwordError.value;
};
</script>

<template>
  <div class="back">
    <router-link to="/">
      <i class="bx bx-left-arrow-alt"></i>
      Voltar
    </router-link>
  </div>
  <div class="login-container">
    <form @submit.prevent="handleLogin" novalidate>
      <img src="@/assets/imgs/perfil.png" alt="perfil" />
      <div class="input-group" :class="{ 'input-error': emailError }">
        <i class="bx bxs-envelope"></i>
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          v-on:keypress="validateLogin"
        />
      </div>
      <div class="input-group" :class="{ 'input-error': passwordError }">
        <i class="bx bxs-lock"></i>
        <input
          id="passwordInput"
          v-model="password"
          type="password"
          placeholder="Senha"
          required
          v-on:keypress="validateLogin"
        />
        <i id="passwordIcon" class="bx bxs-show" v-on:click="showPassword"></i>
      </div>
      <button type="submit">Login</button>

      <div class="register">
        <p>Não tem uma conta? <router-link to="/register">Cadastre-se</router-link></p>
      </div>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  background-image: url('@/assets/imgs/login.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login-container form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
}

.login-container img {
  width: 150px;
  height: 150px;
  margin-bottom: 2rem;
}

.login-container form .input-group {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  color: #197dc9;
  border: 1px solid #197dc9;
  border-radius: 5px;
  width: 100%;
}

.login-container form .input-group i {
  font-size: 1.5rem;
  padding: 0.5rem;
}

#passwordIcon {
  cursor: pointer;
}

.login-container form .input-group input {
  color: #197dc9;
  padding: 0.5rem;
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
}

.login-container form button {
  background-color: #197dc9;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  width: 100%;
}

.register {
  margin-top: 1rem;
}
.register p {
  color: #197dc9;
}
.register p a {
  color: #197dc9;
}

.login-container form .input-group.input-error {
  border-color: red;
}

.back {
  position: absolute;
}

.back a {
  font-weight: bold;
  margin: 1rem;
  color: black;
  font-size: 1.5em;
  text-decoration: none;
  display: flex;
  align-items: center;
}
</style>
