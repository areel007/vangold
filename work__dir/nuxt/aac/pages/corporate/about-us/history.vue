<script setup>
import { ref } from "vue";

const scrollPosition = ref(null);

const updateScroll = () => {
  const mainBody = document.querySelector(".main-body");
  if (scrollPosition.value < window.scrollY) {
    mainBody.classList.add("going-up");
  } else {
    mainBody.classList.remove("going-up");
  }
  scrollPosition.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
</script>

<template>
  <div class="main-body">
    
    <section class="w-full bg-white py-[20px] md:py-[40px]">
      <div class="container">
        <LeftYellowBorderTitle title="Asaba international airport" />
        <p
          class="ml-[10px] text-[18px] md:text-[24px] leading-[1.3] text-primary-color mb-[10px] md:mb-[20px]"
        >
          Asaba International Airport is an airport serving Asaba, the capital
          of Delta State, Nigeria and its environs. The airport handles domestic
          services connecting the city to Nigeria's major metropolitan centres.
          It is managed by the Asaba Airport Company.
        </p>
        <p class="pl-[10px] text-[14px] md:text-[18px] mb-[10px] md:mb-[20px]">
          The Asaba International Airport is the fifth largest in Nigeria in
          terms of the number of passengers handled and goods transported.
        </p>
        <p class="pl-[10px] text-[14px] md:text-[18px] mb-[10px] md:mb-[20px]">
          The airport is situated in the city of Asaba which serves as the
          gateway to the South-east and South-south regions known for commerce,
          industries and oil & gas development – the geographic regions stretch
          from Benin City to Port Harcourt and including urban areas such as
          Onitsha, Nnewi, Aba, Warri etc with high population density,
          industrialisation and incomegeneration concentrations.
        </p>
        <p class="pl-[10px] text-[14px] md:text-[18px] mb-[10px] md:mb-[20px]">
          Built by the Delta State Government, the airport was opened with great
          expectations in 2013. In February 2021, Delta State government signed
          a 30-year concession agreement with the Asaba Airport Company (AAC), a
          consortium of private companies to manage and operate the airport.
          This partnership has started to yield dividend as the airport is
          steadily improving not just in infrastructure but general experience
          of the passengers flying through the airport.
        </p>
      </div>
    </section>

    <section class="w-full py-[10px] md:py-[40px] bg-gray-300">
      <div
        class="container grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-[40px]"
      >
        <div>
          <h3
            class="text-[18px] md:text-[24px] font-semibold mb-[10px] md:mb-[20px]"
          >
            Why Asaba Airport?
          </h3>
          <p
            class="text-[18px] md:text-[22px] leading-[1.3] mb-[10px] md:mb-[20px]"
          >
            Situated in one of the most commercially vibrant areas in Nigeria.
          </p>
          <ul class="text-[14px] md:text-[16px] ml-[20px] list-disc">
            <li>
              One of the richest catchment areas in Nigeria (produces nearly 40%
              of Nigeria's GDP)
            </li>
            <li>
              Region is known for entrepreneurship and economy driven by trade,
              commerce, industry, oil & gas
            </li>
            <li>Nearly 40% of Nigeria's import market based here</li>
            <li>
              The airport is strategically positioned, equidistant connection to
              major cities in the region
            </li>
            <li>
              The fifth-biggest airport system in Nigeria for passenger traffice
            </li>
          </ul>
        </div>
        <div class="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31731.796081792436!2d6.696744365350653!3d6.200959827255065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104392b2b061bd39%3A0x749611dbcabe9489!2sAsaba!5e0!3m2!1sen!2sng!4v1662562036310!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
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
/* .router-link-active {
  color: #faa831;
  font-weight: 500;
} */
</style>
