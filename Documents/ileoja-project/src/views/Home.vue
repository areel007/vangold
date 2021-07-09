<template>
  <div class="home">
    <banner></banner>
  </div>
</template>

<script>

import Banner from "../components/core-ui/banner/banner";
export default {
  name: 'Home',
  components: {Banner},
};
</script>

<style scoped>
.home {
  position: relative;
  top: 10rem;
}

</style>
