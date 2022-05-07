<template>
  <div
    class="w-full h-70 rounded-md bg-white flex py-2 px-10 items-center cursor-pointer hover:shadow-2xl token-card"
    @click="$emit('card-action', token.name)"
  >
    <img
      :src="require(`../static/images/${token.image}`)"
      alt="trust wallet" class="w-10 mr-5"
    >
    <span
      class="text-20 font-medium text-blue"
    >
        {{ token.name }}
      </span>
  </div>
</template>

<script>
export default {
  name: "token-card",
  props: ['token']
}
</script>

<style scoped>
.token-card {
  transition: transform .3s ease;
}
.token-card:hover {
  transform: scaleX(1.05);
}
@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
