<template>
  <div :class="{'overlay': showStates}"></div>
  <web-view-nav
      :nav-links="navLinks"
  ></web-view-nav>

  <router-view
      :categories="categories"
      :trendingProducts="trendingProducts"
      @toggle-favorite="toggleFavorite($event)"
      @open-states="openStates"
  >
  </router-view>
  <footer-component
      :footer-details="footerDetails"
      :socials="socials"
  ></footer-component>
</template>

<script>
import {defineComponent, reactive, ref} from "vue";
import WebViewNav from "./components/core-ui/header/web-view-nav";
import FooterComponent from "./components/core-ui/footer/footer-component";
import router from "./router";

export default defineComponent({
  components: {FooterComponent, WebViewNav},
  setup() {
    const navLinks = reactive([
      { linkName: 'Login', to: '/auth'},
      { linkName: 'Register', to: '/register'},
      { linkName: 'Sell', to: '/sell'},
    ])

    const footerDetails = reactive([
      {
        columnHeader: "Company",
        subLinks: ["About Ileoja", "Privacy", "Terms & Conditions"]
      },
      {
        columnHeader: "Supports",
        subLinks: ["supports@ileoja.com", "Contact us", "FAQs"]
      },
      {
        columnHeader: "Resources",
        subLinks: ["Our blog", "Ileoja on FB", "Ileoja on Instagram", "Ileoja on Youtube", "Ileoja on Twitter"]
      },
      {
        columnHeader: "Hotlinks",
        subLinks: ["Brand", "Ileoja sellers", "Location"]
      },
    ])

    const socials = reactive([
      { to: '/twitter', imageUrl: 'twitter.svg'},
      { to: '/facebook', imageUrl: 'facebook.svg'},
      { to: '/google', imageUrl: 'google_icon.svg'},
      { to: '/instagram', imageUrl: 'instagram.svg'},
    ])

    let showStates = ref(false);


    /** Methods */

    const openStates = () => {
      router.push('/states')
    }

    return {
      navLinks,
      footerDetails,
      socials,
      showStates,
      openStates,
    }
  }
})
</script>

<style>
@import "./styles/guide.css";
.overlay {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #000;
  z-index: 1000;
  opacity: .7;
}

</style>
