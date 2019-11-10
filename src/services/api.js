import axios from 'axios';
import store from "@/store.js";

const http = axios.create({
  baseURL: 'http://arest.me/api/'
});

export default {
  async loadRegions() {
    try {
      store.commit("setBusy", true);
      return (await http.get("/regions")).data;
    } catch {
      store.commit("setError", "Failed to load Regions");
    } finally {
      store.commit("setBusy", false);
    }
  },
  async loadSites(region) {
    try {
      store.commit("setBusy", true);
      return (await http.get(`/regions/${region.key}/sites`)).data;
    } catch {
      store.commit("setError", "Failed to load Sites");
    } finally {
      store.commit("setBusy", false);
    }
  }
}