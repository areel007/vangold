<template>
  <div class="slider">
    <Carousel :autoplay="5000" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item">
          <div class="overlay"></div>
          <img :src="require(`../assets/${slide.imgUrl}`)">
          <div class="slider__article">
            <p
                :class="`slider__title ${slide.imgUrl==='home_slider1.jpg'?'slider__title-one':slide.imgUrl==='home_slider2.jpg'?'slider__title-two':slide.imgUrl==='home_slider3.jpg'?'slider__title-three':slide.imgUrl==='home_slider4.jpg'?'slider__title-four':null}`"
            >{{ slide.slideArticle.articleTitle }}</p>
            <p class="slider__subtitle">{{ slide.slideArticle.articleSubtitle }}</p>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';

export default defineComponent({
  name: "slider",
  props: ["slides"],
  components: {
    Carousel,
    Slide,
  },
  setup() {

  }

});
</script>

<style scoped>
.carousel__item {
  height: 800px;
  width: 100%;
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
  background-color: var(--primary);
  opacity: .5;
  z-index: 2;
}
.carousel__item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  height: 800px;
}
.slider__article {
  z-index: 10;
  position: absolute;
  width: 100%;
  top: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.slider__title {
  font-size: 60px;
  max-width: 1000px;
  text-align: center;
  margin: 0 auto 10px auto;
  font-weight: bold;
  color: var(--white);
}
.slider__title-one,
.slider__title-two,
.slider__title-three,
.slider__title-four {
  color: white;
}
.slider__subtitle {
  margin: 0 auto;
  font-size: 20px;
  max-width: 700px;
  color: var(--complementary);
}

@media screen and (max-width: 900px) {
  .carousel__item,
  .carousel__item img,
  .overlay,
  .slider__article {
    height: 500px;
  }
  .slider__article {
    top: 60%;
    transform: translateY(-50%);
  }
}

@media screen and (max-width: 750px) {
  .slider__title {
    font-size: 32px;
    margin: 0 auto 10px auto;
  }
  .slider__subtitle {
    font-size: 16px;
    margin: 0 auto;
  }
}
@media screen and (max-width: 600px) {
  .carousel__item,
  .carousel__item img,
  .overlay,
  .slider__article {
    height: 300px;
  }
  .slider__article {
    top: 60%;
    transform: translateY(-50%);
  }
  .slider__subtitle {
    max-width: 90%;
    font-size: 14px;
  }
}
</style>