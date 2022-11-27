<template>
  <nav
    class="bg-blue-100 w-90vw h-full fixed top-0 left-0 z-50 -translate-x-100% transition duration-150 ease-in-out p-20 flex flex-col gap-4 shadow-lg"
    :class="{ 'translate-x-0': mobileMenuOut }"
  >
    <div
      v-for="(_menuNav, index) in navMenu"
      :key="index"
      class="text-primary-color"
    >
      <div
        v-if="_menuNav.navName === 'About'"
        class="group relative w-[min-content]"
      >
        <div class="flex items-center gap-1">
          <span>{{ _menuNav.navName }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-primary-color"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div
          class="relative left-[0] top-[0] w-[200px] h-full hidden group-hover:block bg-blue-100 shadow-lg rounded py-2"
        >
          <a
            :href="_subNavMenu.subNavMenuUrl"
            v-for="(_subNavMenu, index) in _menuNav.subNavMenu"
            :key="index"
            class="block p-2"
          >
            {{ _subNavMenu.subNavMenuName }}
          </a>
        </div>
      </div>
      <div v-else>{{ _menuNav.navName }}</div>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  navMenu: {
    type: [Array],
  },
  mobileMenuOut: {
    type: [Boolean],
  },
});
</script>

<style scoped></style>
