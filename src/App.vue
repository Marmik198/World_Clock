<template>
  <v-app>
    <NavBar />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fafafa;
  font-family: Roboto, sans-serif;
}

.v-footer h3 a {
  color: black;
  text-decoration: none;
}

.v-footer h3 a:hover {
  text-decoration: none;
  color: #2196f3;
}
</style>
