<script setup>
import { ref } from "vue";
const showMore = ref(false);
</script>

<template>
  <section id="our-business" class="w-full mb-20">
    <div class="container">
      <div
        class="w-full mb-2 relative h-auto lg:h-[528px] gateway grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0"
      >
        <div
          class="h-full w-full bg-primary-color flex flex-col justify-center pl-10 pr-10 lg:pr-24 py-10 md:py-10"
        >
          <h3 class="text-xl md:text-4xl mb-2 text-white">
            The gateway to <br />the south-east region
          </h3>
          <p class="text-[10px] md:text-base font-light text-white">
            The airport is designated as an international airport and since
            inception has recorded very few unscheduled international flights.
            AAC is currently renovating the airport terminal and upgrading
            requisite infrastructure to commence regional flights to other
            African countries with definite plans to extend to the rest of the
            world.
          </p>
        </div>
        <div class="w-full h-full">
          <img src="../assets/images/gate.jpg" alt="aac" class="w-full h-full object-cover">
        </div>

        <!-- <div class="absolute left-0 top-0 w-full h-full z-10 bg-primary-color opacity-50"></div>
        <div
          class="absolute left-0 top-2/4 -translate-y-2/4 bg-transparent p-3 md:p-5 w-11/12 lg:w-1/2 z-20"
        >
          <h3 class="text-xl md:text-4xl mb-2 text-white">
            The gateway to <br>the south-east region
          </h3>
          <p class="text-[10px] md:text-base font-light text-white">
            The airport is designated as an international airport and since
            inception has recorded very few unscheduled international flights.
            AAC is currently renovating the airport terminal and upgrading
            requisite infrastructure to commence regional flights to other
            African countries with definite plans to extend to the rest of the
            world.
          </p>
        </div>
        <img src="" alt="" /> -->
      </div>

      <div
        class="w-full mb-4 relative h-auto lg:h-[528px] cargo grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-0"
      >
        <div class="w-full h-full">
          <img src="../assets/images/carg.jpg" alt="aac" class="w-full h-full object-cover">
        </div>
        <div
          class="h-full w-full bg-secondary-color flex flex-col justify-center pr-10 md:pr-24 pl-10 lg:pl-10 py-10 md:pt-0 row-start-1 lg:col-start-2"
        >
          <h3 class="text-xl md:text-4xl mb-2 text-primary-color">
            The Cargo Terminal
          </h3>
          <p class="text-[10px] md:text-base font-light text-primary-color">
            The airport is designated as an international airport and since
            inception has recorded very few unscheduled international flights.
            AAC is currently renovating the airport terminal and upgrading
            requisite infrastructure to commence regional flights to other
            African countries with definite plans to extend to the rest of the
            world.
          </p>
        </div>

        <!-- <div
          class="absolute left-0 top-2/4 -translate-y-2/4 bg-secondary-color p-3 md:p-5 w-11/12 lg:w-1/2"
        >
          <h3 class="text-xl md:text-2xl mb-2 text-primary-color">
            The Cargo Terminal
          </h3>
          <p class="text-[10px] md:text-base font-light">
            The Cargo Terminal which will include support infrastructure for air
            cargo transport, will undergo further growth in the coming years in
            terms of the capacity and optimisation.
            <span class="text-[10px] md:text-sm font-semibold cursor-pointer" v-if="!showMore" @click="showMore = true">Continue Reading</span>
          </p>
          <p class="text-xs md:text-base font-light" v-if="showMore">
            The aircraft apron will be enlarged and the site will feature
            warehouses equipped with large areas for the holding and manoeuvring
            of goods and o ce facilities. With the use of technologically
            advanced facilities and innovative computerisation systems, Asaba
            International Airport aims to be the largest cargo airport in
            Nigeria, managing 30% of total goods tra c in West Africa.
            <span v-if="showMore" class="text-[10px] md:text-sm font-semibold cursor-pointer" @click="showMore = false">Read Less</span>
          </p>
        </div>
        <img src="" alt="" /> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
/* .gateway {
  background: url(../assets/images/gateway.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} */
/* .cargo {
  background: url(../assets/images/teminal-cargo.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} */
</style>
