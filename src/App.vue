<template>
  <v-app>
    <NavBar />

    <v-main>
      <SelectCountry @date-change="dateChange" />
      <DigitalTime :selectedDate="selectedDate" />
    </v-main>

    <v-footer app class="justify-center pt-4 pb-4">
      <h3>
        &copy; Copyright -
        <a class="ml-2" target="_blank" href="https://github.com/Marmik198/">
          Project Link</a
        >
      </h3>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SelectCountry from "./components/SelectCountry.vue";
import DigitalTime from "./components/DigitalTime.vue";

export default {
  name: "App",

  components: {
    NavBar,
    SelectCountry,
    DigitalTime,
  },

  data: () => ({
    selectedDate: new Date(),
  }),

  methods: {
    dateChange(date) {
      this.selectedDate = date;
    },
  },
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
