<template>
  <navigation
      :navigations="navigations"
      @toggle-mobile-menu="toggleMenuOut"
      @close="close"
      :change-color="changeColor"
      @handle-scroll="handleScroll"
      :is-mobile-nav-out="isMobileMenuOut"
      class="nav"
  ></navigation>
  <mobile-nav
      :navigations="navigations"
      :is-mobile-menu-out="isMobileMenuOut"
      @close="close"
      :changeColor="changeColor"
      :show-mobile-sub-nav="showMobileSubNav"
      @toggle-mobile-sub-nav="toggleMobileSubNav"
  ></mobile-nav>
  <router-view :is-mobile-menu-out="isMobileMenuOut"/>
  <footer-component></footer-component>
</template>

<script>
import {defineComponent, reactive, ref} from "vue";
import Navigation from "./components/navigation"
import MobileNav from "./components/mobile-nav";
import FooterComponent from "./components/footer-component";

export default defineComponent({
  name: "App",
  components: {
    Navigation,
    MobileNav,
    FooterComponent,
  },
  setup() {
    const navigations = reactive([
      {
        linkName: 'Home',
        linkUrl: '/'
      },
      {
        linkName: 'About us',
        linkUrl: '/vision-mission',
      },
      {
        linkName: 'What we do',
        linkUrl: '/what-we-do'
      },
      {
        linkName: 'Gallery/Media',
        linkUrl: '/gallery'
      },
      {
        linkName: 'Contacts',
        linkUrl: '/contacts'
      },
    ])
    const changeColor = ref(false)
    const isMobileMenuOut = ref(false)
    const showMobileSubNav = ref(false)

    //Actions -> Methods
    const toggleMenuOut = () => {
      isMobileMenuOut.value = true
    }
    const close = () => {
      isMobileMenuOut.value = false
    }
    const handleScroll = () => {
      changeColor.value = window.pageYOffset > 0;
    }
    const toggleMobileSubNav = () => {
      showMobileSubNav.value = !showMobileSubNav.value
    }

    return {
      navigations,
      isMobileMenuOut,
      changeColor,
      showMobileSubNav,
      toggleMenuOut,
      close,
      handleScroll,
      toggleMobileSubNav,
    }
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
  --primary: #00664B;
  --complementary: #A9D636;
  --white: #fff;
  --text-color: #333;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--primary);
  outline: 1px solid slategrey;
}

.container {
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
</style>
