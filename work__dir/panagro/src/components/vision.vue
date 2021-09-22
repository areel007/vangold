<template>
  <div class="vision">
    <div class="container">
      <div class="vision__inner">
        <p class="_title">Our Vision</p>
        <p class="_subtitle">To contribute our quota towards making Nigeria self-sufficient
          in food production, ultimately making an impact by helping Africa feed itself
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vision"
}
</script>

<style scoped>
.vision {
  width: 100%;
  background-color: whitesmoke;
}
.vision__inner {
  padding: 0px 0 20px 0;
  width: 60%;
  margin: 0 auto;
}
._title {
  font-size: 25px;
  margin-bottom: 10px;
  text-align: center;
  color: var(--primary);
  font-weight: 400;
  text-transform: uppercase;

}
._subtitle {
  font-size: 16px;
  line-height: 200%;
  text-align: center;
  color: var(--secondary);
  font-weight: 300;
}
.what section:last-child {
  margin-bottom: 0;
}

@media screen and (max-width: 500px) {
  .vision__inner {
    width: 90%;
  }
}

</style>