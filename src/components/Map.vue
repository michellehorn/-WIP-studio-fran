<template>
  <div>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          width="100%"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Rua%20santa%20luzia%2C%20100&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        >
        </iframe>
          <div id="map" @click="openMaps()" title="Abrir no maps">
            <font-awesome-icon icon="map-marked-alt" class="blink"/>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  methods: {
    openMaps() {
      let answer = confirm("Open Maps?");
      if (answer) {
        window.open(
          "https://www.google.com/maps/dir//-27.593245,-48.5194743/@-27.593245,-48.519474,13z?hl=pt-BR"
        );
      }
    }
  }
};
</script>

<style>
#map {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 20px;
  color: green;
  z-index: 10;
  cursor: pointer;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 300px;
  width: 100%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 300px;
}
</style>
