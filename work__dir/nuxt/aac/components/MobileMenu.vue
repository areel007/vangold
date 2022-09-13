<script setup>
const props = defineProps({
  menu: {
    type: [Object],
  },
  isMobileMenuOut: {
    type: Boolean,
  },
  showSubmenuAboutUs: {
    type: Boolean,
  },
  showSubmenuOurBusiness: {
    type: Boolean,
  },
});
</script>

<template>
  <div
    class="w-full h-full fixed z-[100] -translate-x-full transition-transform"
    :class="{ '-translate-x-0': isMobileMenuOut }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5 absolute right-5 top-5 z-30 text-white"
      v-if="isMobileMenuOut"
      @click="$emit('close-mobile-menu')"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
    <div class="absolute w-full h-full bg-primary-color opacity-80 z-20"></div>
    <nav
      class="w-10/12 h-auto relative z-20 bg-primary-color p-4 flex flex-col gap-4 text-white"
    >
      <div v-for="(_menu, index) in menu" :key="index">
        <div v-if="_menu.menuName === 'About us'" class="">
          <span class="block relative" @click="$emit('open-about-us-submenu')"
            >{{ _menu.menuName }} ></span
          >
          <div class="flex flex-col gap-2" v-if="showSubmenuAboutUs">
            <NuxtLink
              :to="_submenu.url"
              v-for="(_submenu, index) in _menu.submenu"
              :key="index"
              @click="$emit('close-mobile-menu')"
              class="text-sm"
            >
              {{ _submenu.submenuName }}
            </NuxtLink>
          </div>
        </div>

        <div v-if="_menu.menuName === 'Our business'" class="">
          <span
            class="block relative"
            @click="$emit('open-our-business-submenu')"
            >{{ _menu.menuName }} ></span
          >
          <div class="flex flex-col gap-2" v-if="showSubmenuOurBusiness">
            <NuxtLink
              :to="_submenu.url"
              v-for="(_submenu, index) in _menu.submenu"
              :key="index"
              @click="$emit('close-mobile-menu')"
              class="text-sm"
            >
              {{ _submenu.submenuName }}
            </NuxtLink>
          </div>
        </div>

        <NuxtLink
          :to="_menu.menuUrl"
          v-if="
            _menu.menuName !== 'About us' && _menu.menuName !== 'Our business'
          "
          @click="$emit('close-mobile-menu')"
          >{{ _menu.menuName }}</NuxtLink
        >
      </div>
    </nav>
  </div>
</template>
