<script setup>
  import { ref, onMounted } from 'vue';
  const count = ref(0)

onMounted(() => {
  // if (count.value < 2) {
  //   setInterval(() => {
  //     count.value += 1
  //     console.log(count.value);
  //   }, 1000)
  // } else {
  //   count.value = 0
  // }
  setInterval(() => {
    if (count.value < 1) {
      count.value += 1
    } else {
      count.value = 0
    }
  }, 5000)
})
</script>

<template>
  <section
    class="py-10 lg:py-0 w-full  h-[calc(80vh-120px)] md:h-[calc(100vh_-_88px)] relative mb-[10px]"
  >
  <img src="../assets/images/slide-1.jpg" v-if="count===0" alt="aia" class="top-0 w-full h-full object-cover absolute z-10">
  <img src="../assets/images/slide-2.jpg" v-if="count===1" alt="aia" class="top-0 w-full h-full object-cover absolute z-10">
    <div
      class="absolute top-0 left-0 bg-primary-color opacity-70 z-10 w-full h-full"
    ></div>
    <div
      class="container h-full flex flex-col justify-center items-start gap-2 md:gap-4 relative z-20"
    >
      <h1 class="text-[32px] md:text-5xl font-normal text-white leading-[1.1]">
        Welcome to Asaba Airport
      </h1>
      <p class="w-full md:w-6/12 text-sm  md:text-base text-white mb-1 md:mb-2 font-[300]">
        Asaba Airport Company (AAC) is the concessionaire responsible for
        managing Asaba International Airport. It is an emerging airport operator
        in Nigeria for goods and passenger traffic.
      </p>
      <a href="/#about-us" class="uppercase border border-secondary-color px-2 py-2 text-white text-xs">More about us</a>
    </div>
  </section>
</template>
