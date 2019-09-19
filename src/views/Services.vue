<template>
  <div class="services pt-5" :class="getSize() === true ? 'bg-transparent' : 'bg-light'">
      <h3 class="text-font-primary p-3">Nossos serviços</h3>
    <Carousel :dataSlide="dataServices"/>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
export default {
  name: "Services",
  components: {
    Carousel
  },
  data: () => ({
    dataServices: [
      { imgSrc: "servicos/hair", text: "Corte de Cabelo" },
      { imgSrc: "servicos/unha", text: "Manicure/Pedicure" },
      { imgSrc: "servicos/cilios", text: "Cílios" },
      { imgSrc: "servicos/make", text: "Maquiagem" },
      { imgSrc: "servicos/sobrancelha", text: "Design de Sobrancelha" }
    ]
  }),
  methods: {
      getSize() {
          return window.innerWidth > 500;
      }
  }
};
</script>

<style>
.services {
  width: 100%;
}
</style>
