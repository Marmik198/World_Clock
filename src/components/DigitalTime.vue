<template>
  <v-container mt-5>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="4" align="center">
        <h1 class="text-h3 font-weight-black">{{ time }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import getDigitalTime from "../helpers/timeFormat.js";

export default {
  name: "DigitalTime",
  props: {
    selectedDate: {
      type: Date,
    },
  },
  data: () => ({
    time: "",
    timer: undefined,
  }),
  methods: {
    currentTime(date) {
      this.time = getDigitalTime(date);
    },
  },
  beforeMount() {
    this.timer = setInterval(() => {
      this.currentTime(this.selectedDate);
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
h1 {
  color: #02083b;
}

.container {
  padding: 12px !important;
  margin-right: auto !important;
  margin-left: auto !important;
}
</style>
