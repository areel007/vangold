<template>
  <div
      class="home"
      @close="$emit('close')"
      @toggle-mobile-menu="$emit('toggle-mobile-menu')"
      @handle-scroll="$emit('handleScroll')"
  >
    <socials></socials>
    <banner
        :slides="slides"
    ></banner>
    <about></about>
    <what-we-do></what-we-do>
    <slider-two :slides="slides"></slider-two>
    <gallery></gallery>
    <contact-us></contact-us>
  </div>
</template>

<script>
import {defineComponent, reactive} from "vue";
import Banner from "../components/banner";
import About from "../components/about";
import Socials from "../components/socials";
import WhatWeDo from "../components/what-we-do";
import SliderTwo from "../components/slider-two";
import Gallery from "../components/gallery";
import ContactUs from "../components/contact-us";

export default  defineComponent({
  name: 'Home',
  props: ["navigations", "changeColor", "isMobileMenuOut"],
  components: {
    ContactUs,
    Gallery,
    SliderTwo,
    WhatWeDo,
    Socials,
    About,
    Banner,
  },
  setup() {
    const slides = reactive([
      {
        imgUrl: "slider-1.jpg",
        slideArticle: {
          articleTitle: "JBFarms",
          articleSubtitle: "",
        }
      },
      {
        imgUrl: "slider-2.jpg",
        slideArticle: {
          articleTitle: "JBFarms",
          articleSubtitle: "",
        }
      },
      {
        imgUrl: "slider-3.jpg",
        slideArticle: {
          articleTitle: "JBFarms",
          articleSubtitle: "",
        }
      },
      {
        imgUrl: "slider-4.jpg",
        slideArticle: {
          articleTitle: "JBFarms",
          articleSubtitle: "",
        }
      },
    ])
    return {
      slides,
    }

  }
})
</script>
