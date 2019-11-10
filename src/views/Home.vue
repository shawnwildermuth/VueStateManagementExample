<template>
  <div class="row">
    <div class="col-12">
      <h2>Regions</h2>
      <div class="table-responsive">
        <table class="table col-12 text-left w-100">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody v-for="r in regions" :key="r.key">
            <tr>
              <td><router-link :to="{ name: 'region', params: { region: r } }">{{ r.name }}</router-link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { 
  mapState, 
  mapMutations, 
  mapActions,
  mapGetters 
  } from "vuex";


export default {
  name: "home",
  computed: {
    ...mapState(["regions"]),
    ...mapGetters(["siteCount"])
  },
  async mounted() {
    try {
      this.setBusy(true);
      await this.loadRegions();
    } catch {
      this.setError("Failed to load regions");
    } finally {
      this.setBusy(false);
    }
  },
  methods: {
    ...mapActions(["loadRegions"]),
    ...mapMutations(["setError", "setBusy"])
  }
};
</script>

