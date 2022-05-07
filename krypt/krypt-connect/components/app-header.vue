<template>
  <header class="py-1 fixed top-0 w-screen h-70 flex align-middle bg-primary z-10">
    <div class="container mx-auto px-4 lg:px-0 flex align-middle justify-between items-center">
      <div class="flex items-center cursor-pointer" @click="$router.push('/')">
        <img class="mr-1 w-8 md:w-12" src="../static/images/krypt-logo.svg" alt="krypt logo">
        <span class="text-16 md:text-24 text-white">Krypt&bull;Connect</span>
      </div>
      <button class="bg-blue px-2 md:px-4 py-1 md:py-2 rounded" v-if="$route.path === '/'" @click="$router.push('/get-started')">
        <span class="capitalize text-white text-14 md:text-16">Get started</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "app-header"
}
</script>

<style>

</style>
