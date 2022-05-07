<template>
  <div
      class="home"
  >
    <router-view></router-view>
    <banner
        @open-states="$emit('open-states')"
        @mouseover="closeSubcategory"
    ></banner>
    <main>
      <div class="container">
        <div class="main__inner">
          <div class="side-navi">
            <side-navigation
                :categories="categories"
                @select-category="selectCategory($event)"
            ></side-navigation>
            <sub-side-navigation
                :selected="selected"
                @change-selected="selectCategory($event)"
                :showSubcategory="showSubcategory"
            ></sub-side-navigation>
          </div>
          <div class="main__main"
               @mouseover="closeSubcategory"
          >
            <trending
                :trending-products="trendingProducts"
                @toggle-favorite="toggleFavorite($event)"
            ></trending>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import {defineComponent, ref} from "vue";
import Banner from "../components/core-ui/banner/banner";
import SideNavigation from "../components/core-ui/side-navigation/side-navigation";
import Trending from "../components/core-ui/trending/trending";
import SubSideNavigation from "../components/core-ui/side-navigation/sub-side-navigation";
// import SubSideNavigation from "../components/core-ui/side-navigation/sub-side-navigation";

export default defineComponent({
  name: 'Home',
  components: {SubSideNavigation, Trending, SideNavigation, Banner},
  props: ["categories", "trendingProducts", "showStates"],
  setup () {
    const selected = ref(null)

    const showSubcategory = ref(false)

    const toggleFavorite = (e) => {
      this.$emit('toggle-favorite', e)
    }

    const selectCategory = (event) => {
      selected.value = event
      showSubcategory.value = true
    }

    const closeSubcategory = () => {
      showSubcategory.value = false
    }


    return {
      selected,
      toggleFavorite,
      selectCategory,
      showSubcategory,
      closeSubcategory,
    }
  },
})
</script>

<style scoped>
.home {
  position: relative;
  top: 10rem;
}
main {
  margin-bottom: 18.5rem;
}
.main__inner {
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-column-gap: 1.2rem;
}
.side-navi {
  position: relative;
}

</style>
