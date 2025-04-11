<template>
  <main class="profile">
    <h1>Meu Perfil</h1>

    <div v-if="loading" class="loading">Carregando perfil...</div>

    <div v-else class="profile-card">
      <div class="avatar-section">
        <div class="avatar">
          <i class="bx bx-user-circle"></i>
        </div>
        <p class="user-name">{{ user.name }}</p>
        <p class="user-role">Professor</p>
      </div>

      <div class="info-section">
        <div class="info-row">
          <span class="label">Email:</span>
          <span class="value">{{ user.username }}</span>
        </div>
        <div class="info-row">
          <span class="label">Registrado em:</span>
          <span class="value">{{ formatDate(user.created_at) }}</span>
        </div>
        <button class="edit-btn" @click="showEdit = true">
          <i class="bx bx-edit-alt"></i> Editar Perfil
        </button>
      </div>
    </div>

    <!-- Modal de edição -->
    <div v-if="showEdit" class="modal-overlay">
      <div class="modal">
        <h2>Editar Perfil</h2>
        <form @submit.prevent="saveChanges">
          <div class="form-group">
            <label for="name">Nome</label>
            <input id="name" v-model="editName" type="text" />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" v-model="editEmail" type="email" />
          </div>

          <div class="modal-actions">
            <button type="submit" class="save-btn">Salvar</button>
            <button type="button" class="cancel-btn" @click="showEdit = false">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { authService } from '@/services/auth';
import type { AuthState } from '@/types/auth';

const user = ref<AuthState>({
  id: 0,
  name: 'asdsadsadas',
  username: 'asdsadsadsadsa',
  created_at: '',
  token: '',
});

const loading = ref(true);
const showEdit = ref(false);
const editName = ref('');
const editEmail = ref('');

onMounted(async () => {
  await loadUser();
});

const loadUser = async () => {
  try {
    const data = await authService.getCurrentUser();
    user.value = data;
    editName.value = data.name;
    editEmail.value = data.username;
  } catch (err) {
    console.error('Erro ao carregar perfil:', err);
  } finally {
    loading.value = false;
  }
};

const saveChanges = async () => {
  try {
    // Suponha que tenha authService.updateUser()
    await authService.updateUser({ name: editName.value, username: editEmail.value });
    await loadUser();
    showEdit.value = false;
  } catch (err) {
    console.error('Erro ao atualizar perfil:', err);
  }
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
};
</script>

<style scoped>
.profile {
  padding: 2rem;
  max-width: 650px;
  margin: 0 auto;
}

.profile h1 {
  margin-bottom: 2rem;
  color: #333;
}

.loading {
  font-size: 1rem;
  color: #777;
}

.profile-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

.avatar {
  font-size: 3.8rem;
  color: #807cff;
  margin-right: 1.5rem;
}

.info {
  flex: 1;
}

.info p {
  margin: 0.4rem 0;
}

.edit-btn {
  margin-top: 1rem;
  background-color: #807cff;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
}

.edit-btn:hover {
  background-color: #6d68cc;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 30, 30, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}

.modal {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
}

.modal h2 {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

.form-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.4rem;
}

.form-group input {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.save-btn {
  background-color: #807cff;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}

.cancel-btn {
  background: transparent;
  color: #444;
  border: none;
  cursor: pointer;
  padding: 0.6rem 1rem;
}

.profile-card {
  display: flex;
  gap: 2rem;
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  align-items: center;
  flex-wrap: wrap;
}

.avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  min-width: 200px;
}

.avatar {
  font-size: 5rem;
  color: #807cff;
}

.user-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0.4rem 0;
}

.user-role {
  font-size: 0.95rem;
  color: #777;
}

.info-section {
  flex: 2;
  min-width: 260px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0;
  border-bottom: 1px solid #eee;
}

.label {
  font-weight: 500;
  color: #555;
}

.value {
  color: #333;
}

.edit-btn {
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  background-color: #807cff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.edit-btn:hover {
  background-color: #6e6bce;
}

</style>
