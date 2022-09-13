<script setup>
import { reactive } from "vue";
import ServicesCard from "./ServicesCard.vue";

const services = reactive([
  {
    serviceName: "Aviation",
    serviceDetails:
      "Our aviation activities include the management and development of airside and landside airport infrastructure.",
    serviceImage: "aviation.jpg",
  },
  {
    serviceName: "Non-Aviation",
    serviceDetails:
      "This is focused on the commercial services that bring uniqueness and competitiveness to areas of airports such as shopping and parking.",
    serviceImage: "non-aviation.jpg",
  },
  {
    serviceName: "Dedicated Services",
    serviceDetails:
      "Asaba International Airport offers premium services capable of guaranteeing arriving and departing passengers comfort and exclusivity.",
    serviceImage: "dedicated-services.jpg",
  },
]);
</script>

<template>
  <section id="our-services" class="w-full mb-5 md:mb-10">
    <div class="container overflow-x-hidden">
      <h3
        class="text-primary-color font-medium text-lg md:text-[24px] mb-2 md:mb-4"
      >
        Our Business
      </h3>

      <div class="w-full flex gap-[20px] card__container overflow-x-auto">
        <div class="card relative">
          <img
            src="../assets/images/aviation.jpg"
            alt="aia"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-0 w-full lg:w-11/12 h-[40%] bg-white py-3 md:py-6 px-2 md:px-4 z-10 border-b-4 border-primary-color rounded-lg"
          >
            <h3 class="uppercase text-[14px] font-[400] mb-2">
              Aviation
            </h3>
            <h1 class="mb-2 font-[400] text-[24px] text-primary-color">Plan your next escape</h1>
            <p class="text-sm lg:text-base font-light">
              Our aviation activities include the management and development of airside and landside airport infrastructure.
            </p>
          </div>
        </div>

        <div class="card relative">
          <img
            src="../assets/images/non-aviation.jpg"
            alt="aia"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-0 w-full lg:w-11/12 h-[40%] bg-white py-3 md:py-6 px-2 md:px-4 z-10 border-b-4 border-primary-color rounded-lg"
          >
            <h3 class="uppercase text-[14px] font-[400] mb-2">
              Non-Aviation
            </h3>
            <h1 class="mb-2 font-[400] text-[24px] text-primary-color">Plan your next escape</h1>
            <p class="text-sm lg:text-base font-light">
              This is focused on the commercial services that bring uniqueness and competitiveness to areas of airports such as shopping and parking.
            </p>
          </div>
        </div>

        <div class="card relative">
          <img
            src="../assets/images/dedicated-services-1.jpg"
            alt="aia"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-0 left-0 w-full lg:w-11/12 h-[40%] bg-white py-3 md:py-6 px-2 md:px-4 z-10 border-b-4 border-primary-color rounded-lg"
          >
            <h3 class="uppercase text-[14px] font-[400] mb-2">
              Dedicated Services
            </h3>
            <h1 class="mb-2 font-[400] text-[24px] text-primary-color">Plan your next escape</h1>
            <p class="text-sm lg:text-base font-light">
              Asaba International Airport offers premium services capable of guaranteeing arriving and departing passengers comfort and exclusivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 900px) {
  .card__container {
    overflow-x: auto;
  }
}

.card {
  width: 100%;
  height: 528px;
}

@media screen and (max-width: 1204px) {
  .card {
    min-width: 400px;
    height: 528;
  }
}

@media screen and (max-width: 400px) {
  .card {
    min-width: 100%;
    height: 528;
  }
}
</style>
