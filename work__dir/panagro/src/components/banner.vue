<template>
  <div class="banner">
    <slider></slider>
  </div>
</template>

<script>
import Slider from "./slider";
export default {
  name: "banner",
  components: {Slider},
}
</script>

<style scoped>
.banner {
  width: 100%;
}

</style>