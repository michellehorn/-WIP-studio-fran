<template>
  <div class="about">
    <h3 class="text-font-secondary">
      <font-awesome-icon icon="quote-left" />
      A beleza mora em você, nosso trabalho é realçá-la ainda mais <font-awesome-icon icon="quote-right" /></h3>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
  .about {
    padding: 4em 8em;
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    .about {
      padding: 3em 1em;
    }
  }
</style>

