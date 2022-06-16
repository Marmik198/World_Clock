<template>
  <nav>
    <v-app-bar flat app class="text-uppercase">
      <h1 class="brand"><i class="fas fa-clock mr-2"></i></h1>
      <h1 class="font-weight-light brand">World</h1>
      <h1 class="brand">Clock</h1>
      <v-spacer></v-spacer>
      <v-btn outlined class="nav-btn d-none d-sm-flex">
        <a
          class="nav-link"
          href="https://www.linkedin.com/in/marmik-shah19/"
          target="_blank"
        >
          <span>Marmik Shah</span>
          <i class="fas fa-user ml-2" right></i>
        </a>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {},
};
</script>

<style scoped>
.v-app-bar {
  background: #02083b !important;
  color: white !important;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  transition: 0.5s ease-in;
}

.nav-link:hover {
  text-decoration: underline;
}

.brand {
  letter-spacing: 3px;
}

.nav-btn {
  border-color: #fff !important;
}
</style>
