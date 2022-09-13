<template>
  <div class="relative top-[128px]">
    <section class="w-full h-[40vh] bg-primary-color relative">
    <img src="" alt="" />
    <nav
      class="container absolute bottom-0 left-[50%] translate-x-[-50%] p-[10px] bg-white flex gap-2 md:gap-4 items-center uppercase text-[10px] text-primary-color"
    >
      <NuxtLink to="/corporate/about-us/history">History</NuxtLink>
      <NuxtLink to="/corporate/about-us/about-aac">About AAC</NuxtLink>
      <NuxtLink to="/corporate/about-us/management-team/christophe"
        >Management Team</NuxtLink
      >
    </nav>
  </section>
  <NuxtPage />
  </div>
</template>

<style scoped>
  .container {
  width: 1100px;
  max-height: 95%;
  margin: 0 auto;
}
.router-link-active {
  font-weight: bold;
  position: relative;
}
  .router-link-active::before {
  content: "";
  height: 2px;
  width: 40px;
  background: #faa831;
  position: absolute;
  left: 0;
  top: 105%;
}
</style>