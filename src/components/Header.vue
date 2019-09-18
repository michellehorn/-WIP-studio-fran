<template>
  <div>
    <div class="header">
      <div class="pic"></div>
      <div class="text-box">
        <h2 class="up-title-text text-font-primary text-left">Studio</h2>
        <h1 class="title-text text-font-secondary">FRAN RINALDI</h1>
        <h2 class="down-title-text text-font-primary text-right">Make & Hair</h2>
      </div>
        <div class="w-100 h-100 down-set">
          <span>
            <font-awesome-icon class="blink" icon="angle-double-down"/>
          </span>
        </div>
    </div>
    <div class="header sm-h" :class="headerSize">
      <nav id="nav">
        <a href="#features">Features</a>
        <a href="#faq">FAQ</a>
        <a href="#pricing">Pricing</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    headerSize: "lg"
  }),
  methods: {
    handleScroll() {
      setTimeout(() => {
        if (window.innerWidth < 600) {
          window.scrollY > 350
            ? (this.headerSize = "sm")
            : (this.headerSize = "lg");
        } else {
          window.scrollY > 500
            ? (this.headerSize = "sm")
            : (this.headerSize = "lg");
        }
      }, 1000);
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, white, #e0b955);
  box-shadow: 1px 1px 20px #d3d3d3;
  border: none;
  .pic {
    background-image: url("../assets/img/header.png");
    width: 100%;
    height: 100vh;
    opacity: 0.25;
    left: 0;
    top: 0;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .text-box {
    position: absolute;
    padding: 0em 8em;
    z-index: 10;
    top: 50%;
    .title-text {
      font-size: 80px;
      letter-spacing: 0.3em;
      text-align: justify;
      text-justify: inter-word;
      font-weight: 700;
    }
  }
  &.sm-h {
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 60px;
    top: 0;
    left: 0;
  }
  &.sm {
    background: goldenrod;
    opacity: 1;
    animation-duration: 1s;
    animation-name: opacityOn;
  }
  &.lg {
    opacity: 0;
    animation-name: opacityOff;
    animation-duration: 1s;
  }
}

.down-set {
  margin-top: -40px;
  span {
    font-size: 35px;
    padding: 0.8em 1em;
    border-radius: 50%;

    * {
      text-shadow: 1px 1px 2px gray;
    }
  }
}

@media screen and (max-width: 500px) {
  .header {
    max-height: 400px;
    .pic {
      background-image: url("../assets/img/kosa.jpg");
      filter: blur(2px);
      max-height: 400px;
    }
    .text-box {
      padding: 1em;
      top: 13%;
      .title-text {
        font-size: 50px;
      }
    }
  }
}
</style>
