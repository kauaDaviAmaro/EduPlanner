<template>
  <main>
    <h1>Bem vindo de volta!</h1>

    <div class="dashboard">
      <div class="card">
        <router-link to="/">
          <img src="@/assets/imgs/dashboard/home.png" alt="icon" />
          Home
        </router-link>
      </div>
      <div class="card">
        <router-link to="/">
          <img src="@/assets/imgs/dashboard/planejamento.png" alt="icon" />
          Criar planejamento
        </router-link>
      </div>
      <div class="card">
        <router-link to="/">
          <img src="@/assets/imgs/dashboard/atividades.png" alt="icon" />
          Minhas atividades
        </router-link>
      </div>
      <div class="card">
        <router-link to="/">
          <img src="@/assets/imgs/dashboard/biblioteca.png" alt="icon" />
          Biblioteca
        </router-link>
      </div>
      <div class="card">
        <router-link to="/">
          <img src="@/assets/imgs/dashboard/relatorio.png" alt="icon" />
          Relatórios
        </router-link>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
main {
  margin: 1rem;
}
.dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 1rem;
}

h1 {
  font-size: 2em;
  font-weight: bold;
}

.dashboard .card a {
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 1.2em;
  color: black;
  text-decoration: none;
}

.dashboard .card {
  padding-left: 10px;
  display: flex;
  background-color: #ecf0f2;
  width: 200px;
  height: 90px;
  border-radius: 8px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;

  transition: transform 0.5s ease-in-out;
}

.dashboard .card:hover {
  transform: translateY(-5px);
  box-shadow: 1px 7px 5px rgba(0, 0, 0, 0.2);
}

.dashboard .card img {
  width: 50px;
  height: auto;
}
</style>
