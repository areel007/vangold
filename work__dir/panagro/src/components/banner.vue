<template>
  <div class="banner">
    <slider
        :slides="slides"
    ></slider>
  </div>
</template>

<script>
import Slider from "./slider";
export default {
  name: "banner",
  props: ["slides"],
  components: {Slider},
}
</script>

<style scoped>
.banner {
  width: 100%;
}

</style>