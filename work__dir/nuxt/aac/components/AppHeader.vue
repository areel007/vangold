<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
// import { routeLocationKey } from "vue-router";

const props = defineProps({
  menu: {
    type: [Object],
  },
  isMobileMenuOut: {
    type: Boolean,
  },
});

const scrollPosition = ref(null);

const updateScroll = () => {
  const header = document.querySelector("header");
  if (scrollPosition.value < window.scrollY) {
    header.classList.add("going-up");
  } else {
    header.classList.remove("going-up");
  }
  scrollPosition.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});

// Geolocation

const weather = ref(null);
const weatherIcon = ref(null);

const getWeatherToCelcius = computed(() => {
  return weather.value - 273.5;
});

const getImageUrl = (name) => {
  return new URL(`../assets/icons/${name}`, import.meta.url).href;
};

const getWeather = () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=a084881c3144d8d8bb06580901c4902e`
      )
      .then((res) => {
        weather.value = res.data.main.temp;
        weatherIcon.value = res.data.weather[0].icon;
      });
  });
};
onMounted(() => getWeather());
</script>

<template>
  <header class="w-full bg-white fixed z-50 top-0 left-0 h-[128px]">
    <div
      class="h-[40px] w-full bg-gradient-to-t from-primary-color to-[#1e1e1e]"
    >
      <div
        class="container h-full flex justify-end items-center gap-3 md:gap-8"
      >
        <!-- Search omponent -->
        <div
          class="sm:flex items-center gap-2 border-b border-gray-400 pb-[2px] hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search & Explore"
            class="bg-transparent text-white text-[12px] placeholder:text-[12px] placeholder:text-gray-400 outline-none"
          />
        </div>

        <!-- Weather Component -->
        <div class="weather">
          <span class="text-white text-[14px] font-semibold flex items-center gap-2"
            >{{ Math.round(getWeatherToCelcius) }}&#8451;
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-[20px] h-[20px] fill-secondary-color">
              <path
                d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
              />
            </svg>
          </span>
        </div>

        <!-- Nav -->
        <div class="h-full flex text-white text-[12px]">
          <NuxtLink
            to="/"
            class="h-full flex items-center px-[8px]"
            :class="{
              'sharp-link-corporate':
                $route.fullPath[1] === 'c' || $route.fullPath === '/',
            }"
            >Corporate</NuxtLink
          >
          <NuxtLink
            to="/passengers"
            class="h-full flex items-center px-[8px]"
            :class="{ 'sharp-link-passengers': $route.fullPath[1] === 'p' }"
            >Passengers</NuxtLink
          >
        </div>
      </div>
    </div>
    <div class="container flex justify-between h-[80px] items-center relative">
      <img
        src="../assets/images/aia-logo.svg"
        alt="aac"
        class="w-100 md:w-150"
        @click="$router.push('/')"
      />
      <nav
        class="uppercase hidden md:flex items-center font-[400] text-xs h-full"
      >
        <a
          :href="_menu.menuUrl"
          v-for="(_menu, index) in menu"
          :key="index"
          class="text-primary hover:text-secondary-color px-4 h-full flex justify-center items-center border-b-2 border-transparent hover:border-primary-color"
        >
          <div
            v-if="_menu.menuName === 'About us'"
            class="group h-full flex items-center justify-center"
          >
            <div class="">{{ _menu.menuName }}</div>
            <div
              class="absolute top-full left-0 z-20 w-full py-4 bg-white hidden group-hover:block border-t border-gray-300 p-10"
            >
              <a
                v-for="(_submenu, index) in _menu.submenu"
                :key="index"
                :href="_submenu.url"
                class="block mb-4 last:mb-0 hover:underline text-primary-color"
                >{{ _submenu.submenuName }}</a
              >
            </div>
          </div>

          <div
            v-if="_menu.menuName === 'Our business'"
            class="group h-full flex items-center justify-center"
          >
            <div class="">{{ _menu.menuName }}</div>
            <div
              class="absolute top-full left-0 z-20 w-full py-4 bg-white hidden group-hover:block border-t border-gray-300 p-10"
            >
              <a
                v-for="(_submenu, index) in _menu.submenu"
                :key="index"
                :href="_submenu.url"
                class="block mb-4 last:mb-0 hover:underline text-primary-color"
                >{{ _submenu.submenuName }}</a
              >
            </div>
          </div>

          <span
            v-if="
              _menu.menuName !== 'About us' && _menu.menuName !== 'Our business'
            "
            >{{ _menu.menuName }}</span
          >
        </a>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 block md:hidden"
        v-if="!isMobileMenuOut"
        @click="$emit('open-mobile-menu')"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
    <div
      class="relative h-2 w-full bg-gradient-to-r from-yellow-300 to-[#f69f09]"
    ></div>
  </header>
</template>

<style scoped>
header {
  transition: top 0.5s ease;
}
.sharp-link-corporate {
  background: #faa831;
  color: #004151;
}
.sharp-link-passengers {
  background: #faa831;
  color: #004151;
}
.going-up {
  top: -128px;
}
</style>
