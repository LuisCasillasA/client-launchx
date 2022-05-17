import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    path: "/mission_commander",
    name: "mission_commander_list",
    component: () => import("./components/MissionCommanderList")
  },
  {
    path: "/mission_commander/:id",
    name: "mission_commander",
    component: () => import("./components/MissionCommander")
  },
  {
    path: "/addCommander",
    name: "mission_commander_form",
    component: () => import("./components/MissionCommanderForm")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
