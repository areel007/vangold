<template>
  <div class="container mx-auto flex items-center justify-center flex-col h-screen w-full">
    <img class="w-56 h-56 mb-5" src="../static/images/code.png" alt="code">
    <h1 class="text-white text-20 text-center">Please contact admin/support for authentication</h1>
  </div>
</template>

<script>
export default {
  name: "contact-admin",
  layout: 'token'
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
