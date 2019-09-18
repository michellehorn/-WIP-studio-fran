<template>
  <div id="app">
    <div class="header-app">
      <Header/>
      <div class="pt-5">
        <About/>
        <div class="container p-5">
          <section id="features">feature</section>
          <section id="faq">faq</section>
          <section id="pricing">pricing</section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./components/Header";
import About from "./views/About";
export default {
  components: {
    Header,
    About
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
.heade-app {
  height: 100vh;
}
.container {
  section {
    height: 300px;
  }
}
</style>
