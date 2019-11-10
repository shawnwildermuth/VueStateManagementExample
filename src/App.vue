<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="alert alert-warning" v-if="error">{{ error }}</div>
        <div v-if="isBusy"><i class="fas fa-spinner fa-spin"/> Please Wait...</div>
      </div>
      <div class="col-9">
        <div id="app">
          <router-view />
        </div>
      </div>
      <div class="col-3">
        <Cart></Cart>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Cart from "@/components/Cart.vue";
export default {
  computed: mapState(["error", "isBusy"]),
  components: {
    Cart
  }
}
</script>