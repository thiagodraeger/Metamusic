<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  created() {
    this.loggedIn ? this.setHeaders() : this.unsetHeaders();
  },
  computed: {
    ...mapState("auth", ["loggedIn"]),
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapMutations("auth", ["setHeaders", "unsetHeaders"]),
  },
};
</script>

<style scoped>

</style>