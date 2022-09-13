<template>
  <div class="main-body">
    <section class="w-full bg-white py-[20px] md:py-[40px]">
      <div class="container">
        <LeftYellowBorderTitle title="Management team" />

        <nav class="text-xs md:text-[14px] mb-[20px] md:mb-[60px]">
          <NuxtLink to="/corporate/about-us/management-team/christophe"
            >Christophe Penninck</NuxtLink
          >
          <span class="text-secondary-color"> &#124; </span>
          <NuxtLink to="/corporate/about-us/management-team/lionel"
            >Lionel Thome</NuxtLink
          >
          <span class="text-secondary-color"> &#124; </span>
          <NuxtLink to="/corporate/about-us/management-team/charles"
            >Charles Aroguma</NuxtLink
          >
          <span class="text-secondary-color"> &#124; </span>
          <NuxtLink to="/corporate/about-us/management-team/franklin"
            >Franklin Mohworode</NuxtLink
          >
          <span class="text-secondary-color"> &#124; </span>
          <NuxtLink to="/corporate/about-us/management-team/adejoke"
            >Adejoke Orintowo</NuxtLink
          >
          <span class="text-secondary-color"> &#124; </span>
          <NuxtLink to="/corporate/about-us/management-team/ume"
            >Ume Ugbu</NuxtLink
          >
          <span class="text-secondary-color"> &#124; </span>
          <NuxtLink to="/corporate/about-us/management-team/femi"
            >Femi Odai</NuxtLink
          >
        </nav>
        <NuxtPage />
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100;200;300;400;500&display=swap");

body {
  font-family: "Montserrat", sans-serif;
}
.container {
  width: 1100px;
  max-height: 95%;
  margin: 0 auto;
}
.main-body {
  transition: top 0.5s ease;
}
.router-link-active {
  color: #004151 !important;
  font-weight: bold !important;
}
.router-link-active:before {
  content: "";
  height: 0;
  width: 0;
  background: transparent;
}
</style>
