<template>
  <div class="products">
    <p class="products__title">Our Product</p>
    <div class="product__image-banner">
      <img src="../assets/product-banner.jpg" alt="product">
    </div>
    <p class="fertilizer">Urea</p>
    <ul class="product__details container">
      <li>Nitrogen Content - 46% weight minimum</li>
      <li>Biuret - 0.9% weight maximum</li>
      <li>Moisture - 0.35% weight maximum</li>
      <li>Free Ammonia - 100ppm weight maximum</li>
      <li>Granulometry - Min of 90% by weight between 2mm & 4mm and > than 5% under 2mm</li>
      <li>Formaldehyde in product - 0.5% weight maximum</li>
      <li>Crushing strength for medium - 2.5kgF minimum for medium size (2.8mm)</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "products"
}
</script>

<style scoped>
.products {
  width: 100%;
  background-color: whitesmoke;
  padding: 60px 0 0 0;
  position: relative;
}
.products__title {
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
  color: var(--primary);
  font-weight: 500;
  text-transform: uppercase;
}
.product__image-banner {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  /*background: url("../assets/our-product-image.jpg") center no-repeat;*/
  /*background-size: contain;*/
}
.product__image-banner img {
  width: 100%;
  height: 100%;
}
.product__details {
  padding-bottom: 60px;
  /*margin-bottom: 20px;*/
  color: var(--secondary);
  font-size: 16px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px 40px;
}
.fertilizer {
  text-align: center;
  color: var(--primary);
  text-transform: uppercase;
  margin-bottom: 10px;
}

@media screen and (max-width: 950px) {
  .product__details {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 700px) {
  .product__details {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 600px) {
  .product__details {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .product__details li {
    text-align: center;
    list-style: none;
  }
}

</style>