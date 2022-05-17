<template>
<h4>Mission Comanders</h4>
  <div v-if="currentCommander" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentCommander.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentCommander.username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input type="text" class="form-control" id="title"
          v-model="currentCommander.mainStack"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteCommander">
      Eliminar Mission Commander
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateCommander">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un Mission commander. </p>
  </div>
</template>
<script>
import MissionCommanderService from "../services/MissionCommanderService";
export default {
  name: "mission_commander",
  data() {
    return {
      currentCommander: null,
      message: ''
    };
  },
  methods: {
    getCommander(id) {
      MissionCommanderService.get(id)
        .then(response => {
          this.currentCommander= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCommander() {
      MissionCommanderService.delete(this.currentCommander.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "mission_commander_list" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateCommander() {
      MissionCommanderService.update(this.currentCommander.id, this.currentCommander)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getCommander(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
