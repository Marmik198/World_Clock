<template>
  <v-app>
    <NavBar />

    <v-main></v-main>

    <v-footer app class="justify-center pt-4 pb-4">
      <h3>&copy; Copyright -</h3>
      <h3>
        <a class="ml-2" target="_blank" href="https://github.com/Marmik198/">
          Project Link</a
        >
      </h3>
    </v-footer>
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

.v-footer {
  background: #02083b !important;
  color: white !important;
}

.v-footer h3 a {
  color: #fff;
  text-decoration: none;
}

.v-footer h3 a:hover {
  text-decoration: underline;
}
</style>
