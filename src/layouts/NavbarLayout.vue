<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-content">
        <div class="navbar-logo">
          <RouterLink to="/"><span id="firstBrand">Edu</span>Planner</RouterLink>
        </div>
        <ul class="navbar-links">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">Quem somos nós?</RouterLink>
          </li>
        </ul>
      </div>
      <div class="navbar-login">
        <RouterLink to="/login" id="login">Entrar</RouterLink>
        <RouterLink to="/register" id="register">Cadastrar-se</RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  /* background-color: rgba(24, 26, 27, 0.15); */
  background-color: #807cff81;
  backdrop-filter: blur(5px);
  width: 100%;
  position: absolute;
  font-weight: bold;
  font-size: 1.2rem;
}

/* #firstBrand {
  color: #DBA8AC;
} */

.navbar-logo {
  font-size: 1.2em;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.navbar-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.navbar i {
  font-size: 1.5rem;
}

.navbar-login {
  display: flex;
  gap: 1rem;
}

.navbar-login a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.navbar a {
  color: var(--color-white);
  text-decoration: none;
}

#register {
  padding: 7px;
  background-color: var(--color-primary);
  border-radius: 7px;
}
</style>
