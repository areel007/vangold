<template>
  <div>
    <AppHeader />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/app-header";
import AppFooter from "../components/app-footer";
export default {
  name: "defaults",
  components: {AppFooter, AppHeader}
}
</script>

<style scoped>

</style>
