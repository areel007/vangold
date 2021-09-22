<template>
  <div class="about">
    <div class="container">
      <div class="about__inner">
        <p class="_title">About Us</p>
        <p class="_subtitle">Panagro is a local fertilizer distribution company that supports agribusinesses,
          farmers, and growers across Nigeria.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
}
</script>

<style scoped>
.about {
  width: 100%;
  background-color: whitesmoke;
}
.about__inner {
  padding: 60px 0 20px 0;
  width: 60%;
  margin: 0 auto;
}
._title {
  font-size: 32px;
  margin-bottom: 10px;
  text-align: center;
  color: var(--primary);
  font-weight: 500;
  text-transform: uppercase;

}
._subtitle {
  font-size: 22px;
  line-height: 200%;
  text-align: center;
  color: var(--secondary);
}
.what section:last-child {
  margin-bottom: 0;
}

@media screen and (max-width: 500px) {
  .about__inner {
    width: 90%;
  }
}

</style>