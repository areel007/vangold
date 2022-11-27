<template>
  <div class="">
    <slot :currentSlide="currentSlide" />
  </div>
</template>

<script setup>
const currentSlide = ref(1);
const getSlideCount = ref(null)

const nextSlide = () => {
  if (currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1;
  }
  else currentSlide.value += 1
}

onMounted(() => {
  getSlideCount.value = document.querySelectorAll('.slide').length;
  setInterval(() => nextSlide(), 10000)
})

</script>
