<template>
  <div class="about">
    <div class="container">
      <div class="about__inner">
        <div class="left-column">
          <section-title section-title="About us"></section-title>
        </div>
        <div class="right-column">
          <p class="right-column__title">
            JB Farms Nigeria Limited (JBFNL) was incorporated on the 20th of February 1985 as a palm oil
            trading company. The company is involved in the development of commercial oil palm plantation,
            production of palm oil and other palm produce.
          </p>
          <p class="right-column__subtitle">
            Over the years, JB farms has established a reputation as one of the leading local producers
            of palm oil in Nigeria. The company is an indigenous fast growing integrated agribusiness with
            fresh plans to diversify into other areas along the agricultural value chain.
            <span
                style="color: var(--primary);
                font-size: 14px; cursor: pointer;
                font-weight: 600"
                @click="$router.push('/about-us')"
            >
              Read more</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "./section-title";
export default {
  name: "about",
  components: {SectionTitle}
}
</script>

<style scoped>
.about__inner {
  padding: 40px 0;
  position: relative;
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-column-gap: 60px;
}
.left-column {
  position: relative;
  border-top: 2px solid var(--complementary);
  --section-title-color: var(--primary)
}
.right-column {
  border-top: 1px solid #c5c2c2;
  padding: 40px 0 0 0;
}
.right-column .right-column__title {
  margin-bottom: 40px;
  font-size: 26px;
  line-height: 150%;
  color: grey;
}
.right-column .right-column__subtitle {
  font-size: 18px;
  line-height: 200%;
}

@media screen and (max-width: 1100px) {
  .about__inner {
    grid-template-columns: 1fr;
  }
  .right-column .right-column__title {
    text-align: left;
  }
  .right-column .right-column__subtitle {
    text-align: justify;
  }
}
</style>