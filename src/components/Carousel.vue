<template>
  <div class="carousel">
    <vue-glide :style="isLgSize() === true ? {paddingLeft:'35px',paddingRight:'35px'} : {textAlign: 'center'}" :perView="isLgSize() === true ? 4 : 1" :autoplay="3500" :hoverpause="true">
      <vue-glide-slide v-for="(item, i) in dataSlide" :key="i">
        <img :src="require(`../assets/img/${item.imgSrc}.jpg`)" alt>
        <h5 class="text-font-secondary text-secondary">{{item.text}}</h5>
      </vue-glide-slide>
      <template slot="control" id="ctrl-button">
        <font-awesome-icon icon="chevron-left" data-glide-dir="<" :style="{position: 'absolute', left: '5', top: '40%', color: 'gray', fontSize: '30px'}"/>
        <font-awesome-icon icon="chevron-right" data-glide-dir=">" :style="{position: 'absolute', right: '5', marginLeft: '10px', top: '40%', color: 'gray', fontSize: '30px'}"/>
      </template>
    </vue-glide>
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
export default {
  name: "Carousel",
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  props: {
    dataSlide: { type: Array, default: () => [] }
  },
  methods: {
    isLgSize() {
      return window.innerWidth > 500;
    }
  }
};
</script>

<style lang="scss">
.carousel {
  .glide__slides {
    .glide__slide {
     padding:1em;
      img {
        height: 230px;
        width: 230px;
        border-radius: 50%;
        box-shadow: 1px 2px 8px white;
      }
    }
  }
  
}
</style>
