<script setup>
const props = defineProps({
  serviceName: {
    type: String,
  },
  serviceDetails: {
    type: String,
  },
  serviceImage: {
    type: String,
  },
});

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

</script>

<template>
  <div class="card relative">
    <img :src="getImageUrl(serviceImage)" alt="aia" class="w-full h-full object-cover" />
    <div
      class="absolute bottom-0 left-0 w-full lg:w-11/12 h-[40%] bg-gray-200 py-3 md:py-6 px-2 md:px-4 z-10 border-b-4 border-primary-color"
    >
      <h3 class="uppercase text-xs lg:text-base font-semibold mb-2">
        {{ serviceName }}
      </h3>
      <p class="text-sm lg:text-base font-light">{{ serviceDetails }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 528px;
}

@media screen and (max-width: 1204px) {
  .card {
    min-width: 400px;
    height: 528;
  }
}
</style>
