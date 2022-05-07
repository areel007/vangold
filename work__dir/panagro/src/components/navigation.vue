<template>
  <header  :class="{'change-color': changeColor, 'change-bg': $route.name!=='Home'}">
    <div class="container">
      <div class="nav__inner">
        <img
            src="../assets/jb-farms-logo.png"
            alt="logo"
            @click="$router.push('/')"
        >
        <nav>
          <template
              v-for="(_navigation, index) in navigations"
              :key="index"
          >
            <router-link
                :to="_navigation.linkUrl"
                v-if="_navigation.linkName!=='About us'"
                class="main-link"
            >
              {{ _navigation.linkName }}
            </router-link>
            <router-link
                to="#"
                v-else
                class="main-link about-us-main-link"
            >
              {{ _navigation.linkName }}
              <svg
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#ffffff"
              >
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              </svg>
              <ul class="about-us-dropdown">
                <li
                    @click="$router.push('/about-us')"
                >
                  JB farms
                </li>
                <li
                    @click="$router.push('/about-us/vision-mission')"
                >
                  Vision/Mission
                </li>
                <li
                    @click="$router.push('/about-us')"
                >
                  Leadership
                </li>
              </ul>
            </router-link>
          </template>
        </nav>
        <!--        Open mobile menu-->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            class="hamburger-menu"
            @click="$emit('toggle-mobile-menu')"
            v-if="!isMobileNavOut"
        >
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
        <!--        Close mobile menu-->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            @click="$emit('close')"
            v-if="isMobileNavOut"
            class="close"
        >
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59
      6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "navigation",
  props: ['navigations', 'isMobileNavOut', 'changeColor'],
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.$emit('handle-scroll')
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  background-color: transparent;
  position: fixed;
  z-index: 10;
  transition: all .3s ease;
}
header .nav__inner {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header .nav__inner img {
  width: 100px;
  cursor: pointer;
}
.change-color {
  box-shadow: 0 0 3px black;
  padding: 10px 0;
  background-color: var(--white) !important;
}

.nav__inner nav {
  display: flex;
  justify-content: space-between;
}
.nav__inner nav a.main-link {
  font-size: 14px;
  color: var(--white);
  font-weight: 400;
  transition: font-weight .3s ease;
  margin-right: 20px;
  position: relative;
  display: flex;
  align-items: center;
  /*height: 100px;*/
}
.nav__inner nav a:last-child {
  margin-right: 0;
}
.nav__inner .hamburger-menu {
  display: none;
  cursor: pointer;
  fill: var(--white);
}
.nav__inner .close {
  display: none;
  fill: var(--white);
}
.router-link-active {
  font-weight: 600 !important;
}
.change-color .nav__inner nav a {
  color: var(--primary) !important;
}
.change-color .nav__inner nav a svg {
  fill: var(--primary);
}
.change-bg {
  background-color: var(--primary);
}
.change-bg .nav__inner nav a {
  color: var(--white);
}
.change-color .nav__inner .hamburger-menu,
.change-color .nav__inner .close
{
  fill: var(--primary);
}
.about-us-dropdown {
  position: absolute;
  top: 101%;
  background-color: var(--white);
  padding: 20px;
  /*opacity: 0.7;*/
  box-shadow: 0 0 2px grey;
  display: none;
}
.about-us-dropdown li {
  /*margin-bottom: 20px;*/
  line-height: 200%;
  color: var(--primary);
}
.about-us-dropdown li:last-child {
  margin-bottom: 0;
}
.about-us-dropdown li a {
  color: #00664B !important;
}
.about-us-main-link:hover .about-us-dropdown {
  display: block;
}




/* Responsiveness */

@media screen and (max-width: 1100px) {
  .nav__inner nav {
    display: none;
  }
  .nav__inner .hamburger-menu {
    display: block;
  }
  .nav__inner .close {
    display: block;
  }
}

@media screen and (max-width: 900px) {
  header .nav__inner img {
    width: 80px;
  }
}

@media screen and (max-width: 600px) {
  header .nav__inner {
    height: 50px;
  }
  header .nav__inner img {
    width: 50px;
  }
}

</style>