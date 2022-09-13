<script setup>
import { ref } from "vue";
import OurBusiness from "~~/components/OurBusiness.vue";

useHead({
  title: "Home",
  // or, instead:
  titleTemplate: (title) => `AAC - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "test",
  },
});

const scrollPosition = ref(null);

const updateScroll = () => {
  const mainBody = document.querySelector(".main-body");
  if (scrollPosition.value < window.scrollY) {
    mainBody.classList.add("going-up");
  } else {
    mainBody.classList.remove("going-up");
  }
  scrollPosition.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
</script>

<template>
  <div class="top-[120px] left-0 relative main-body">
    <AppHero />
    <AboutUs />
    <OurServices />
    <OurBusiness />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100;200;300;400;500&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Montserrat", sans-serif;
}
.main-body {
  transition: top 0.5s ease;
}
</style>
