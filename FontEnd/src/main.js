import Vue from "vue";
import VueRouter from "vue-router";

// ประกาศ Axios
import VueAxios from "vue-axios";
import axios from "axios";

import App from "./App.vue";
import GameList from "./components/GameList.vue";
import CreateGame from "./components/CreateGame.vue";
import HomeGame from "./components/HomeGame.vue";
import CodeGame from "./components/CodeGame.vue";
import Admin from "./components/Admin.vue";

Vue.use(VueRouter);

// เรียกใช้
Vue.use(VueAxios, axios);

const routes = [
  {
    name: "GameList",
    path: "/game_list",
    component: GameList
  },
  {
    name: "CreateGame",
    path: "/create_game",
    component: CreateGame
  },
  {
    name: "HomeGame",
    path: "/",
    component: HomeGame
  },
  {
    name: "CodeGame",
    path: "/code_game/:id",
    component: CodeGame
  },
  {
    name: "Admin",
    path: "/admin",
    component: Admin
  }
];

const router = new VueRouter({ mode: "history", routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");