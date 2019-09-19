<template>
  <div id="app">
    <div class="header-app">
      <Header/>
      <div class="pt-5">
        <About/>
        <div :class="getSize() === true ? 'container p-5' : 'p-1'">
          <section id="features">feature</section>
          <section id="services">
            <Services />
          </section>
          <section id="contact">
            <Contact/>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import About from "./views/About";
import Contact from "./views/Contact";
import Services from "./views/Services";
export default {
  components: {
    Header,
    About,
    Contact,
    Services
  },
  methods: {
    getSize() {
     return window.innerWidth > 500;
    }
  }
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    margin: 1em;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  section {
    margin: 2em 0em;
  }
</style>
