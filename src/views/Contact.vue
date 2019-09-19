<template>
  <div class="w-100 pt-2">
    <div class="container text-font-secondary">
      <div class="text-center">
        <h6>
          <strong>Horário de funcionamento</strong>
        </h6>
        <ul id="list">
          <li>seg: 09:00 – 20:00</li>
          <li>ter: 09:00 – 20:00</li>
          <li>qua: 09:00 – 20:00</li>
          <li>qui: 09:00 – 20:00</li>
          <li>sex: 09:00 – 20:00</li>
          <li>sáb: 09:00 – 20:00</li>
          <li>dom: Fechado</li>
        </ul>
      </div>
      <div class="text-left">
        <h6>
          <strong>Endereço:</strong>Rua Santa Luzia, 100 - Trindade, Florianópolis - SC, 88036-540
        </h6>
        <h6>
          <strong>Telefone:</strong>(48) 3365-9690
        </h6>
      </div>
    </div>
    <Map/>
  </div>
</template>

<script>
import Map from "../components/Map";

export default {
  name: "Contact",
  components: {
    Map
  }
};
</script>

<style lang="scss">
#list li {
  list-style-type: none;
}
ul {
  padding: 0;

}
</style>
