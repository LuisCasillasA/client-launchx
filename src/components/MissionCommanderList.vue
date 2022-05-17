<template>

  <div class="list row">
    <div class="col-md-6">
      <h4> Mission Commanders </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(commander, index) in mission_commanders"
          :key="index"
          @click="setActiveCommander(commander, index)"
        >
          {{ commander.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentCommander">
        <h4>Mission Commander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentCommander.name}}
          <br><label><strong>Username:</strong></label> {{ currentCommander.username}}
          <br><label><strong>Main Stack:</strong></label> {{ currentCommander.mainStack}}
        </div>
        <router-link :to="'/mission_commander/' + currentCommander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un Mission commander.</p>
      </div>
    </div>
  </div>
  <h1>Estoy Aqui</h1>
</template>
<script>

import MissionCommanderService from "../services/MissionCommanderService";

export default {
  name: "mission_commander_list",
  data() {
    return {
      tutorials: [],
      mission_commanders: [],
      currentTutorial: null,
      currentCommander: null,
      currentIndex: -1,
      title: "",
      commanderId: ""
    };
  },
  methods: {
    getAllCommanders(){
      MissionCommanderService.getAll()
        .then(response => {
          this.mission_commanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveCommander(commander, index) {
      this.currentCommander = commander;
      this.currentIndex = commander? index : -1;
    }
  },
  mounted() {
    this.getAllCommanders();
  }
};
</script>
