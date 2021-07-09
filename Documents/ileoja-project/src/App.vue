<template>
  <web-view-nav :nav-links="navLinks"></web-view-nav>
  <router-view/>
</template>

<script>
import {defineComponent, reactive} from "vue";
import WebViewNav from "./components/core-ui/header/web-view-nav";

export default defineComponent({
  components: {WebViewNav},
  setup() {
    const navLinks = reactive([
      { linkName: 'Login', to: '/login'},
      { linkName: 'Register', to: '/register'},
      { linkName: 'Sell', to: '/sell'},
    ])

    return {
      navLinks
    }
  }
})
</script>

<style>
@import "./styles/guide.css";
</style>
