<template>
  <v-container mt-1>
    <div class="clock">
      <div class="hour">
        <div id="hr" class="hr"></div>
      </div>
      <div class="min">
        <div id="mn" class="mn"></div>
      </div>
      <div class="sec">
        <div id="sc" class="sc"></div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AnalogTime",

  props: {
    selectedDate: {
      type: Date,
    },
  },

  data: () => ({
    timer: undefined,
    hh: undefined,
    mm: undefined,
    ss: undefined,
    deg: 6,
  }),

  methods: {
    currentTime(date) {
      this.hh = date.getHours() * 30;
      this.mm = date.getMinutes() * this.deg;
      this.ss = date.getSeconds() * this.deg;

      document.querySelector("#hr").style.transform = `rotateZ(${
        this.hh + this.mm / 12
      }deg)`;
      document.querySelector("#mn").style.transform = `rotateZ(${this.mm}deg)`;
      document.querySelector("#sc").style.transform = `rotateZ(${this.ss}deg)`;
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
.container {
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clock {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/clock.png");
  background-size: cover;
  margin: 0 auto;
  border: 8px solid #02083b;
  border-radius: 50%;
  box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
    inset 0 -15px 15px rgba(255, 255, 255, 0.05), 0 15px 15px rgba(0, 0, 0, 0.3),
    inset 0 15px 15px rgba(0, 0, 0, 0.3);
}

.clock::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background: #02083b;
  border-radius: 50%;
  z-index: 10000;
}

.clock .hour,
.clock .min,
.clock .sec {
  position: absolute;
}

.clock .hour,
.hr {
  width: 160px;
  height: 160px;
}

.clock .min,
.mn {
  width: 190px;
  height: 190px;
}
.clock .sec,
.sc {
  width: 230px;
  height: 230px;
}

.hr,
.mn,
.sc {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hr:before {
  content: "";
  position: absolute;
  width: 6px;
  height: 80px;
  top: 0;
  background: #ff105e;
  z-index: 10;
  border-radius: 6px 6px 0 0;
}
.mn:before {
  content: "";
  position: absolute;
  width: 4px;
  height: 100px;
  top: 0;
  background: #ffcb03;
  z-index: 11;
  border-radius: 6px 6px 0 0;
}
.sc:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 130px;
  top: 0;
  background: #5ec576;
  z-index: 12;
  border-radius: 6px 6px 0 0;
}
</style>
