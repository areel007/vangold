<template>
  <div>
    <AppHeader
        :nav-menu="navMenu"
        :mobile-menu-out="mobileMenuOut"
        @open-mobile-menu="openMobileMenu"
        @close-mobile-menu="closeMobileMenu"
    />
    <MobileMenu
        :mobile-menu-out="mobileMenuOut"
        :nav-menu="navMenu"
    />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
const navMenu = reactive([
  {
    navName: 'About',
    navUrl: '/#',
    navIcon: '<svg\n' +
        '              xmlns="http://www.w3.org/2000/svg"\n' +
        '              class="h-4 w-4"\n' +
        '              fill="none"\n' +
        '              viewBox="0 0 24 24"\n' +
        '              stroke="currentColor"\n' +
        '              stroke-width="2"\n' +
        '          >\n' +
        '            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />\n' +
        '          </svg>',
    subNavMenu: [
      {
        subNavMenuName: 'Children',
        subNavMenuUrl: '/about/children'
      },
      {
        subNavMenuName: 'Teenager',
        subNavMenuUrl: '/about/teenager',
      },
      {
        subNavMenuName: 'Adult',
        subNavMenuUrl: '/about/adult',
      },
    ]
  },
  {
    navName: 'Watch',
    navUrl: '/watch',
    navIcon: '<svg\n' +
        '              xmlns="http://www.w3.org/2000/svg"\n' +
        '              class="h-4 w-4"\n' +
        '              fill="none"\n' +
        '              viewBox="0 0 24 24"\n' +
        '              stroke="currentColor"\n' +
        '              stroke-width="2"\n' +
        '          >\n' +
        '            <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />\n' +
        '            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n' +
        '          </svg>'
  },
  {
    navName: 'Care',
    navUrl: '/care',
    navIcon: '<svg\n' +
        '              xmlns="http://www.w3.org/2000/svg"\n' +
        '              class="h-4 w-4"\n' +
        '              fill="none"\n' +
        '              viewBox="0 0 24 24"\n' +
        '              stroke="currentColor"\n' +
        '              stroke-width="2"\n' +
        '          >\n' +
        '            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />\n' +
        '          </svg>'
  },
  {
    navName: 'Blog',
    navUrl: '/blog',
    navIcon: '<svg\n' +
        '              xmlns="http://www.w3.org/2000/svg"\n' +
        '              class="h-4 w-4"\n' +
        '              fill="none"\n' +
        '              viewBox="0 0 24 24"\n' +
        '              stroke="currentColor"\n' +
        '              stroke-width="2"\n' +
        '          >\n' +
        '            <path stroke-linecap="round" stroke-linejoin="round" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />\n' +
        '          </svg>'
  }
]);
const mobileMenuOut = ref(false);
const openMobileMenu = () => {
  mobileMenuOut.value = true
}
const closeMobileMenu = () => {
  mobileMenuOut.value = false
}
</script>