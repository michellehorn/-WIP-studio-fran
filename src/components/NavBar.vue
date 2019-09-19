<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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
    navItens: { type: Array, default: [] }
  }
};
</script>

<style>
</style>
