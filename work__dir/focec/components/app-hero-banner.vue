<template>
  <div>
    <carousel
        class="h-250 md:h-[60vh] relative"
        v-slot="{currentSlide}"
    >
      <slide
          v-for="(slide, index) in slides"
          :key="index"
      >
        <div
            v-show="currentSlide === index + 1"
            class="slide-info absolute top-0 left-0 w-full h-full"
        >
          <div class="bg-black opacity-50 absolute z-20 top-0 left-0 w-full h-full"></div>
          <img :src="slide" class="w-full h-full object-cover absolute top-0 left-0" alt="focec">
          <div class="container relative h-full w-full flex flex-col justify-center items-center z-30">
            <h1 class="text-white text-30 md:text-60 font-light mb-1 md:mb-3 text-center">You're welcome...</h1>
            <p class="text-white text-14 md:text-16 text-center">"Come to me, all who labor and are heavy laden, and I will give you rest" - <span class="text-white; italic">Matthew 11:28</span></p>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script setup>
const slides = reactive([
    'https://res.cloudinary.com/dkqhcmwne/image/upload/v1655548053/focec/focec-hero-banner_pxh6cu.jpg',
    'https://res.cloudinary.com/dkqhcmwne/image/upload/v1655551918/focec/pexels-luis-quintero-2351719_ibcnla.jpg',
    'https://res.cloudinary.com/dkqhcmwne/image/upload/v1655573857/focec/pexels-daniel-borges-2090830_k20mq4.jpg'
])


</script>
