import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

let mongo_api = "http://apivue.app.ruk-com.cloud/api/game/";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    games: []
  },

  mutations: {
    fetchGame(state, { res }) {
      state.games = res.data;
    },
    addGame(state, { payload }) {
      state.games.push(payload);
    },
    deleteGame(state, { payload }) {
      state.games.splice(payload.index, 1);
    },
    editGame(state, { payload }) {
      state.games[payload.index].name = payload.name;
      state.games[payload.index].price = payload.price;
    }
  },

  actions: {
    async fetchGame({ commit }) {
      await Axios.get(mongo_api)
        .then(res => commit("fetchGame", { res }))
        .catch(err => alert(err));
    },
    async addGame({ commit }, payload) {
      await Axios.post(mongo_api, payload)
        .then(() => commit("addGame", { payload }))
        .catch(err => alert(err));
    },
    async deleteGame({ commit }, payload) {
      alert(payload._id);
      await Axios.delete(mongo_api + payload._id)
        .then(() => commit("deleteGame", { payload }))
        .catch(err => alert(err));
    },
    async editGame({ commit }, payload) {
      await Axios.put(mongo_api + payload._id, payload)
        .then(() => commit("editGame", { payload }))
        .catch(err => alert(err));
    }
  },

  getters: {
    games: state => state.games
  }
});