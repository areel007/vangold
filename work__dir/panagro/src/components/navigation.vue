<template>
  <nav  :class="{'change-color': changeColor}">
    <div class="container">
      <div class="nav__inner">
        <img src="../assets/logo.png" alt="logo">
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      changeColor: false,
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if(window.pageYOffset>0) {
        this.changeColor = true;
      } else {
        this.changeColor = false
      }
    }
  }
}
</script>

<style scoped>
nav {
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 10;
}
nav .nav__inner {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav .nav__inner img {
  width: 200px;
  cursor: pointer;
}
.change-color {
  box-shadow: 0 0 5px black;
  background-color: whitesmoke;
}

@media screen and (max-width: 900px) {
  nav .nav__inner img {
    width: 150px;
  }
}

</style>