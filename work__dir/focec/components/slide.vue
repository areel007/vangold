<template>
  <div class="slide">
    <transition name="fade">
      <slot />
    </transition>
  </div>
</template>

<script setup>
// const props = defineProps({
//   index: {
//     type: [Number],
//   },
// })
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .7s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
