<template>
  <div class="home">
    <!-- Navbar -->
    <header class="navbar">
      <h1 class="logo">EduPlanner</h1>
      <nav>
        <router-link to="/login" class="nav-link">Login</router-link>
        <router-link to="/register" class="nav-link btn-nav">Registrar</router-link>
      </nav>
    </header>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <h2>Organize suas aulas com eficiência e praticidade</h2>
        <p>Com o EduPlanner, professores têm acesso a ferramentas intuitivas para planejar, baixar recursos e acompanhar sua jornada educacional.</p>
        <router-link to="/register" class="btn">Comece agora</router-link>
      </div>
    </section>

    <!-- Funcionalidades -->
    <section class="features">
      <h3>O que você pode fazer</h3>
      <div class="feature-grid">
        <div class="feature-card">
          <i class="bx bx-calendar-alt"></i>
          <h4>Planejamentos</h4>
          <p>Monte planejamentos personalizados e organize seu cronograma de aulas.</p>
        </div>
        <div class="feature-card">
          <i class="bx bx-book-content"></i>
          <h4>Minhas Atividades</h4>
          <p>Acesse, gerencie e reaproveite suas atividades favoritas com poucos cliques.</p>
        </div>
        <div class="feature-card">
          <i class="bx bx-library"></i>
          <h4>Biblioteca</h4>
          <p>Explore uma variedade de recursos prontos para aplicar em sala de aula.</p>
        </div>
        <div class="feature-card">
          <i class="bx bx-bar-chart-alt-2"></i>
          <h4>Relatórios</h4>
          <p>Acompanhe seus dados e visualize seu progresso ao longo do tempo.</p>
        </div>
      </div>
    </section>

    <!-- Como funciona -->
    <section class="steps">
      <h3>Como funciona</h3>
      <div class="steps-wrapper">
        <div class="step">
          <span>1</span>
          <p>Crie sua conta gratuita em poucos segundos</p>
        </div>
        <div class="step">
          <span>2</span>
          <p>Escolha atividades ou crie planejamentos personalizados</p>
        </div>
        <div class="step">
          <span>3</span>
          <p>Acompanhe tudo em um painel intuitivo e fácil de usar</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <h3>Pronto para transformar sua rotina como professor?</h3>
      <router-link to="/register" class="btn btn-large">Criar conta agora</router-link>
    </section>
  </div>
</template>

<style scoped>
/* Reset simples */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #f0f0ff;
  border-bottom: 1px solid #ddd;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #807cff;
}

.nav-link {
  margin-left: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #807cff;
}

.btn-nav {
  background-color: #807cff;
  color: #fff;
  padding: 0.4rem 1rem;
  border-radius: 6px;
}

.btn-nav:hover {
  background-color: #6a65b2;
  color: #fff;
}

/* Hero */
.hero {
  padding: 4rem 2rem;
  background-color: #fafafe;
  text-align: center;
}

.hero h2 {
  font-size: 2.4rem;
  margin-bottom: 1rem;
  color: #333;
}

.hero p {
  max-width: 650px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  color: #555;
}

.btn {
  background-color: #807cff;
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #6a65b2;
}

.btn-large {
  padding: 1rem 2.2rem;
  font-size: 1.1rem;
  margin-top: 1rem;
}

/* Funcionalidades */
.features {
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
}

.features h3 {
  font-size: 2rem;
  margin-bottom: 2.5rem;
  color: #333;
}

.feature-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.feature-card {
  background-color: #f4f4fa;
  width: 240px;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card i {
  font-size: 2.5rem;
  color: #807cff;
  margin-bottom: 1rem;
}

.feature-card h4 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

/* Steps */
.steps {
  padding: 4rem 2rem;
  background-color: #f9f9ff;
  text-align: center;
}

.steps h3 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

.steps-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.step {
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  width: 220px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.06);
  text-align: center;
}

.step span {
  display: inline-block;
  background-color: #807cff;
  color: white;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;
  font-weight: bold;
  margin-bottom: 1rem;
}

/* CTA */
.cta {
  padding: 3rem 2rem;
  background-color: #807cff10;
  text-align: center;
}

.cta h3 {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  color: #333;
}
</style>
