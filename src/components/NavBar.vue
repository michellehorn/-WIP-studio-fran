<template>
  <b-navbar toggleable="lg" :class="classBg">
    <b-navbar-brand href="#app">LOGO</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" @click="toggleClass()"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :href="item.path" :key="index" v-for="(item, index) in navItens">{{item.name}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    navItens: { type: Array, default: () => [] }
  },
  data: () => ({
    classBg: ""
  }),
  methods: {
    toggleClass() {
      if (window.pageYOffset < 400) {
        if (this.classBg === "") {
          this.classBg = "bg-golden";
        } else {
          this.classBg = "";
        }
      }
    }
  }
};
</script>

<style>
.bg-golden {
  background-color: goldenrod !important;
}
</style>
