<template>
  <div class="mission">
    <div class="container">
      <div class="mission__inner">
        <p class="_title">Our Mission</p>
        <p class="_subtitle">To provide quality products efficiently and at the best possible price</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mission"
}
</script>

<style scoped>
.mission {
  width: 100%;
  background-color: whitesmoke;
}
.mission__inner {
  padding: 0 0 60px 0;
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
  .mission__inner {
    width: 90%;
  }
}

</style>