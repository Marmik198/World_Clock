<template>
  <v-app>
    <NavBar />

    <v-main class="mainc">
      <SelectCountry @date-change="dateChange" />
      <AnalogTime :selectedDate="selectedDate" />
      <DigitalTime :selectedDate="selectedDate" />
    </v-main>

    <v-footer app class="justify-center pt-4 pb-4">
      <h3>
        &copy; Copyright -
        <a
          class="ml-2"
          target="_blank"
          href="https://github.com/Marmik198/World_Clock"
        >
          Project Link</a
        >
      </h3>
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SelectCountry from "./components/SelectCountry.vue";
import AnalogTime from "./components/AnalogTime.vue";
import DigitalTime from "./components/DigitalTime.vue";

export default {
  name: "App",

  components: {
    NavBar,
    SelectCountry,
    AnalogTime,
    DigitalTime,
  },

  data: () => ({
    selectedDate: new Date(),
    timer: undefined,
  }),

  methods: {
    dateChange(date) {
      this.selectedDate = date;
    },
  },
  beforeMount() {
    this.timer = setInterval(() => {
      this.selectedDate.setSeconds(this.selectedDate.getSeconds() + 1);
    }, 1000);
  },

  beforeUnmount() {
    clearInterval(this.timer);
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
  overflow: hidden;
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
