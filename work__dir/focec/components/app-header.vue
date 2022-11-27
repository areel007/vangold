<template>
  <header class="fixed top-0 left-0 w-full h-50 md:h-70 font-normal text-white z-50 text-12 md:text-14" :class="{'bg-white text-primary-color': scrollPosition > 50}">
    <div class="container mx-auto h-full flex justify-between items-center h-full">
      <h1 class="font-bold text-xl">
        <nuxt-link to="/">FOCEC</nuxt-link>
      </h1>
      <div class="flex items-center gap-5 hidden md:flex h-full">
        <nav class="flex gap-5 items-center h-full">
          <div
              class="flex gap-1 items-center relative h-full cursor-pointer"
              v-for="(_navMenu, index) in navMenu"
              :key="index"
          >
            <div v-if="_navMenu.navName==='About'" class="h-full flex items-center group">
              <div class="flex gap-1 items-center">
                <span v-html="_navMenu.navIcon"></span>
                <a :href="_navMenu.navUrl">{{_navMenu.navName}}</a>
              </div>
              <div class="absolute top-full w-300 bg-white px-4 hidden group-hover:block shadow-2xl rounded">
                <a
                    v-for="(_subNavMenu, index) in _navMenu.subNavMenu"
                    :key="index"
                    :href="_subNavMenu.subNavMenuUrl"
                    class="block py-3 text-black border-b border-grey last:border-none"
                >
                  {{_subNavMenu.subNavMenuName}}
                </a>
              </div>
            </div>
            <div v-else class="flex gap-1 items-center">
              <span v-html="_navMenu.navIcon"></span>
              <a :href="_navMenu.navUrl">{{ _navMenu.navName }}</a>
            </div>
          </div>
        </nav>
        <span>|</span>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            v-if="false"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            v-else
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <a href="" title="FOCEC Facebook page">
          <span>fb</span>
        </a>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 block md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          v-if="!mobileMenuOut"
          @click="$emit('open-mobile-menu')"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          v-else
          @click="$emit('close-mobile-menu')"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  navMenu: {
    type: [Array],
  },
  mobileMenuOut: {
    type: [Boolean]
  }
})
const scrollPosition = ref(null);
const updateScroll = () => {
  scrollPosition.value = window.scrollY;
}
onMounted(() => {
  window.addEventListener('scroll', updateScroll);
})
</script>