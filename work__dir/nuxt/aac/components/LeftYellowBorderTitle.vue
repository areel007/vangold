<script setup>
  const props = defineProps({
    title: {
      type: String
    }
  })
</script>

<template>
  <h1 class="text-primary-color text-[18px] md:text-[28px] font-semibold ml-[10px] mb-[10px] md:mb-[30px] capitalize">
    {{title}}
  </h1>
</template>

<style scoped>
h1 {
  position: relative;
}
h1:before {
  content: "";
  width: 3px;
  height: 100%;
  background: #faa831;
  position: absolute;
  left: -10px;
}
</style>
