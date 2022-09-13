<script setup>
import { reactive, ref } from "vue";

const showSubmenuAboutUs = ref(false)

const showSubmenuOurBusiness = ref(false)

const menu = reactive([
  {
    menuName: "Home",
    menuUrl: "/",
  },
  {
    menuName: "Flights",
    menuUrl: "/flights",
  },
  {
    menuName: "About us",
    menuUrl: "#",
    submenu: [
      {
        submenuName: 'History',
        url: '/corporate/about-us/history'
      },
      {
        submenuName: 'About AAC',
        url: '/corporate/about-us/about-aac'
      },
      {
        submenuName: 'Management Team',
        url: '/corporate/about-us/management-team/christophe'
      }
    ]
  },
  {
    menuName: "Our business",
    menuUrl: "/our-business",
    submenu: [
      {
        submenuName: 'Aviation',
        url: '/aviation',
      },
      {
        submenuName: 'Non-Aviation',
        url: '/non-aviation',
      },
      {
        submenuName: 'Dedicated Business',
        url: '/dedicated-business',
      },
      {
        submenuName: 'Advertising',
        url: '/advertising',
      }
    ]
  },
  {
    menuName: "Contacts",
    menuUrl: "/contacts",
  },
]);

const isMobileMenuOut = ref(false);

const openMobileMenu = () => (isMobileMenuOut.value = true);
const closeMobileMenu = () => {
  isMobileMenuOut.value = false
  showSubmenuAboutUs.value = false
  showSubmenuOurBusiness.value = false
}
const openAboutUsSubmenu = () => {
  showSubmenuAboutUs.value = true
  showSubmenuOurBusiness.value = false
}
const openOurBusinessSubmenu = () => {
  showSubmenuOurBusiness.value = true
  showSubmenuAboutUs.value = false
}

</script>

<template>
  <div>
    <AppHeader
      :menu="menu"
      :isMobileMenuOut="isMobileMenuOut"
      @open-mobile-menu="openMobileMenu"
    />
    <MobileMenu
      :menu="menu"
      :isMobileMenuOut="isMobileMenuOut"
      @close-mobile-menu="closeMobileMenu"
      :show-submenu-about-us="showSubmenuAboutUs"
      :show-submenu-our-business="showSubmenuOurBusiness"
      @open-about-us-submenu="openAboutUsSubmenu"
      @open-our-business-submenu="openOurBusinessSubmenu"
    />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
