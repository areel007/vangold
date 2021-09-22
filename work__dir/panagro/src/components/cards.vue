<template>
  <div class="cards">
    <div class="container">
      <div class="cards__inner">
        <div class="card">
          <p class="card__title">Playing a key role</p>
          <p class="card__subtitle">Studies have shown that adoption and application
            of fertilizers in Sub-Saharan Africa remains low, well below global average
            recommendations. FAO IFDC. A proven link between proper fertilizer
            application and improved crop yields has been established
          </p>
        </div>
        <div class="card">
          <p class="card__title">Improving crop yields</p>
          <p class="card__subtitle">To improve crop yields, the efficient use and application
            of fertilizers is recommended. Statistics show that an increase by a factor of 5 is
            required to meet global average recommendations of the FAO.
            Proven link between proper fertilizer application and improved crop yields has been established
          </p>
        </div>
        <div class="card">
          <p class="card__title">Making a positive impact</p>
          <p class="card__subtitle">Changing lives and improving the livelihoods of farmers,
            crop growers and local communities as a result
          </p>
        </div>
        <div class="card">
          <p class="card__title">Quality</p>
          <p class="card__subtitle">To satisfy our customers, we provide fertilisers that have been
            tried and tested to meet global standards and stringent specifications
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cards"
}
</script>

<style scoped>
.cards {
  width: 100%;
  background-color: white;
}
.cards__inner {
  padding: 60px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
}
.card {
  padding: 20px;
  box-shadow: 0 0 1px #ababab;
  cursor: pointer;
  transition: all .5s ease;
}
.card:hover {
  box-shadow: 0 2px 3px #ababab;
}
.card__title {
  color: var(--primary);
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 5px;
}
.card__subtitle {
  font-size: 12px;
  color: var(--secondary);
  line-height: 150%;
  text-align: center;
}

@media screen and (max-width: 950px) {
  .cards__inner {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
    grid-row-gap: 20px;
  }
}

</style>