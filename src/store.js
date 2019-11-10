// store.js
import Vue from "vue";
import Vuex from "vuex";
import Api from "@/services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    error: "",
    isBusy: "",
    regions: [],
    currentSites: [],
    siteCart: []
  },
  mutations: {
    setError(state, error) { state.error = error; },
    setBusy(state, busy) { state.isBusy = busy; },
    setRegions(state, regions) { state.regions = regions; },
    setCurrentSites(state, sites) { state.currentSites = sites; },
    addToCart(state, site) { state.siteCart.push(site); },
    clearCart(state) { state.siteCart = []; }
  },
  actions: {
    async loadRegions({ commit }) {
      let regions = await Api.loadRegions();
      commit("setRegions", regions);
    },
    async loadSites({ state, commit }, key) {
      let region = state.regions.find(r => r.key == key);
      if (region) {
        let sites = await Api.loadSites(region);
        commit("setCurrentSites", sites);
        return;
      }
      commit("setError", "Failed to get sites");
    }
  },
  getters: {
    siteCount(state, getters) {
      return state.currentSites.length;
    },
    findSite: (state) => (siteId) => {
      state.currentSites.find(s => s.id == siteId);
    }
  }
});