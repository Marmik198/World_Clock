<template>
  <v-container mt-9>
    <v-row justify="center" align="center">
      <v-autocomplete
        :items="cities.zones"
        label="Select Country"
        dense
        outlined
        item-text="countryName"
        @input="selectionChange"
        v-model="selectedCountry"
      ></v-autocomplete>
      <v-btn class="mb-6 ml-5" @click="yourTime">Your Time</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import myFetch from "../helpers/myFetch.js";

export default {
  name: "SelectCountry",
  data: () => ({
    cities: [],
    selectedCountry: undefined,
    selectedDate: null,
  }),
  methods: {
    async getCities() {
      this.cities = await myFetch(
        `https://api.timezonedb.com/v2.1/list-time-zone?key=${process.env.VUE_APP_API_SECRET}&format=json`
      );
    },

    async selectionChange(value) {
      this.cities.zones.forEach((city) => {
        if (city.countryName === value) value = city.zoneName;
      });

      this.selectedCountry = value;
      let city = await myFetch(
        `https://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.VUE_APP_API_SECRET}&format=json&by=zone&zone=${value}`
      );
      let selectedOffset = city.gmtOffset;
      let offset = this.getTimeZone(selectedOffset / 60);
      let d = new Date();
      let utc = d.getTime() + d.getTimezoneOffset() * 60000;
      this.selectedDate = new Date(utc + 3600000 * offset);
      this.$emit("date-change", this.selectedDate);
    },

    getTimeZone(offset) {
      let o = Math.abs(offset);
      return (
        (offset < 0 ? "-" : "+") +
        ("00" + Math.floor(o / 60)).slice(-2) +
        "." +
        ("00" + (o % 60)).slice(-2)
      );
    },

    yourTime() {
      this.selectedDate = new Date();
      this.selectedCountry = "";
      this.$emit("date-change", this.selectedDate);
    },
  },

  created() {
    this.getCities();
  },
};
</script>

<style scoped>
.v-btn {
  background: #02083b !important;
  color: white !important;
  border: 2px solid #02083b !important;
}

.v-btn:hover {
  color: #02083b !important;
  background-color: #fff !important;
}

.container {
  width: 100% !important;
  padding: 12px !important;
  margin-right: auto !important;
  margin-left: auto !important;
}

@media screen and (max-width: 972px) {
  .container {
    width: 95% !important;
  }
}
</style>
