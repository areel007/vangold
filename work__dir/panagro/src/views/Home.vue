<template>
  <div class="home">
    <navigation></navigation>
    <banner></banner>
    <about></about>
    <vision></vision>
    <mission></mission>
    <cards></cards>
    <products></products>
    <footer-component></footer-component>
  </div>
</template>

<script>

import Navigation from "../components/navigation";
import Banner from "../components/banner";
import Vision from "../components/vision";
import Mission from "../components/mission";
import About from "../components/about";
import FooterComponent from "../components/footer-component";
import Cards from "../components/cards";
import Products from "../components/products";
export default {
  name: 'Home',
  components: {
    Products,
    Cards,
    FooterComponent,
    About,
    Mission,
    Vision,
    Banner,
    Navigation
  }
}
</script>
