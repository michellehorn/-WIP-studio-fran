<template>
  <div class="about">
    <h2 class="text-font-secondary">
      <font-awesome-icon icon="quote-left" class="pr-1"/>A beleza mora em você, nosso trabalho é realçá-la ainda mais
      <font-awesome-icon icon="quote-right" class="pl-1"/>
    </h2>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    getSize() {
      return window.innerWidth > 500;
    }
  }
};
</script>

<style lang="scss">
.about {
  padding: 4em 20em;
  height: 100%;
  width: 100%;
  h2 {
    line-height: 2em;
    letter-spacing: 5px;
  }
}
@media screen and (max-width: 600px) {
  .about {
    padding: 3em 1em;
    h2 {
    line-height: 1.3em;
    letter-spacing: 5px;
  }
  }
}
</style>

