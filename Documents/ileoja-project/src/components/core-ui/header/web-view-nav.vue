<template>
  <header>
    <div class="container">
      <div class="header__inner">
        <router-link to="/">
          <img src="../../../assets/images/ileoja-logo.png" alt="logo">
        </router-link>

        <template v-if="authenticated">
          <div class="logged-in__status">
            <div class="circles">
              <div class="circle" @click="$router.push('/account/favorite')">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9529 6.90409C17.8344 6.53961 17.5111 6.28156 17.1301 6.24709L11.9341 5.77536L9.88055 0.967661C9.72893 0.614445 9.38396 0.386475 8.99998 0.386475C8.616 0.386475 8.27089 0.614445 8.12023 0.967661L6.06672 5.77536L0.869822 6.24709C0.488865 6.28225 0.166273 6.5403 0.0470698 6.90409C-0.0714472 7.26856 0.0380059 7.66834 0.326127 7.92103L4.25394 11.3652L3.09583 16.4659C3.01109 16.841 3.15666 17.2288 3.46786 17.4537C3.63513 17.5753 3.83165 17.636 4.02886 17.636C4.19832 17.636 4.36793 17.5909 4.5194 17.5003L8.99998 14.8212L13.4797 17.5003C13.8084 17.6967 14.2216 17.6787 14.5321 17.4537C14.8433 17.2288 14.9889 16.841 14.9041 16.4659L13.746 11.3652L17.6738 7.92103C17.9618 7.66834 18.0714 7.26939 17.9529 6.90409Z" fill="#6A6B6C"/>
                </svg>

              </div>
              <div class="circle">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1087 0.212891H2.87371C1.59449 0.212891 0.553711 1.25367 0.553711 2.53289V10.0205C0.553711 11.2972 1.58996 12.3361 2.86547 12.3405V15.7384L7.74824 12.3408H15.1087C16.3879 12.3408 17.4287 11.3 17.4287 10.0205V2.53289C17.4287 1.25367 16.3879 0.212891 15.1087 0.212891ZM12.9121 8.91437H5.07033V7.9256H12.9121V8.91437ZM12.9121 6.805H5.07033V5.81623H12.9121V6.805ZM12.9121 4.69562H5.07033V3.70685H12.9121V4.69562Z" fill="#6A6B6C"/>
                </svg>

              </div>
              <div class="circle">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0343 12.6847C13.9003 11.7262 13.25 10.3252 13.25 8.841V6.75C13.25 4.11075 11.2895 1.926 8.75003 1.56V0.75C8.75003 0.33525 8.41403 0 8.00003 0C7.58603 0 7.25003 0.33525 7.25003 0.75V1.56C4.70978 1.926 2.75003 4.11075 2.75003 6.75V8.841C2.75003 10.3252 2.09978 11.7262 0.959031 12.6908C0.667281 12.9405 0.500031 13.3035 0.500031 13.6875C0.500031 14.4113 1.08878 15 1.81253 15H14.1875C14.9113 15 15.5 14.4113 15.5 13.6875C15.5 13.3035 15.3328 12.9405 15.0343 12.6847Z" fill="#6A6B6C"/>
                  <path d="M8.00001 18C9.35826 18 10.4945 17.0317 10.7555 15.75H5.24451C5.50551 17.0317 6.64176 18 8.00001 18Z" fill="#6A6B6C"/>
                </svg>

              </div>
              <div class="circle">
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8186 3.57211V0.295654H10.3314L13.8186 3.57211Z" fill="#6A6B6C"/>
                  <path d="M4.9855 4.26389H13.0146L9.00003 0.491943L4.9855 4.26389Z" fill="#6A6B6C"/>
                  <path d="M13.5399 5.3186H4.46014L9.00001 15.7044L13.5399 5.3186Z" fill="#6A6B6C"/>
                  <path d="M4.18143 3.57211L7.66861 0.295654H4.18143V3.57211Z" fill="#6A6B6C"/>
                  <path d="M3.12673 4.26376V1.08984L0.114258 4.26376H3.12673Z" fill="#6A6B6C"/>
                  <path d="M14.8733 4.26376H17.8857L14.8733 1.08984V4.26376Z" fill="#6A6B6C"/>
                  <path d="M14.6909 5.3186L10.9882 13.7893L18 5.3186H14.6909Z" fill="#6A6B6C"/>
                  <path d="M3.30908 5.3186H0L7.01181 13.7893L3.30908 5.3186Z" fill="#6A6B6C"/>
                </svg>

              </div>
              <div class="circle">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4205 7.4736L9.40018 0.452285C8.98614 0.0392685 8.31638 0.0441553 7.90776 0.451758C7.49681 0.863755 7.49681 1.53271 7.90776 1.94418L14.9291 8.965C15.3404 9.37633 16.0091 9.37633 16.4205 8.965C16.8329 8.55255 16.8329 7.88598 16.4205 7.4736Z" fill="#6A6B6C"/>
                  <path d="M7.38686 2.91455L7.33402 3.17942C6.96182 5.04123 6.05725 6.80998 4.83377 8.24355L8.6534 12.0632C10.0868 10.8399 11.8312 9.91108 13.6931 9.53842L13.9584 9.48558L7.38686 2.91455Z" fill="#6A6B6C"/>
                  <path d="M4.13352 9.03467L1.52305 11.6446C0.906237 12.2614 0.903671 13.2628 1.52305 13.8822L3.01446 15.3736C3.63127 15.9904 4.63267 15.9929 5.25205 15.3736L7.86227 12.7634L4.13352 9.03467ZM4.50638 13.1365C4.3004 13.3425 3.96667 13.3425 3.76068 13.1365C3.5547 12.9305 3.5547 12.5968 3.76068 12.3908L4.50638 11.6451C4.71237 11.4391 5.0461 11.4391 5.25209 11.6451C5.45807 11.8511 5.45807 12.1848 5.25209 12.3908L4.50638 13.1365Z" fill="#6A6B6C"/>
                  <path d="M10.0641 15.6541L10.7815 14.9368C11.4009 14.3174 11.3988 13.316 10.7815 12.6997L10.2487 12.1665C9.95415 12.3643 9.6729 12.5793 9.39946 12.8086L10.0358 13.4459C10.2413 13.6503 10.2427 13.9831 10.0358 14.1911L9.30658 14.9203L8.23494 13.882L6.74347 15.3735L9.1361 17.692C9.54441 18.1013 10.2148 18.1036 10.627 17.6914C11.0384 17.28 11.0384 16.611 10.627 16.1995L10.0641 15.6541Z" fill="#6A6B6C"/>
                  <path d="M12.1945 0C11.903 0 11.6671 0.235864 11.6671 0.527345V1.58203C11.6671 1.87352 11.903 2.10938 12.1945 2.10938C12.4859 2.10938 12.7218 1.87352 12.7218 1.58203V0.527345C12.7218 0.235864 12.4859 0 12.1945 0Z" fill="#6A6B6C"/>
                  <path d="M16.4132 4.21875H15.3585C15.067 4.21875 14.8312 4.45461 14.8312 4.74609C14.8312 5.03758 15.067 5.27344 15.3585 5.27344H16.4132C16.7047 5.27344 16.9406 5.03758 16.9406 4.74609C16.9406 4.45461 16.7047 4.21875 16.4132 4.21875Z" fill="#6A6B6C"/>
                  <path d="M15.7313 1.20917C15.5253 1.00319 15.1916 1.00319 14.9856 1.20917L13.9309 2.26386C13.725 2.46984 13.725 2.80358 13.9309 3.00956C14.1369 3.21554 14.4707 3.21558 14.6766 3.00956L15.7313 1.95487C15.9373 1.74889 15.9373 1.41515 15.7313 1.20917Z" fill="#6A6B6C"/>
                </svg>

              </div>
            </div>
            <div class="user__avatar">
              <img src="../../../assets/images/avatar-image.png" alt="avatar">
            </div>
          </div>
        </template>

        <ul>
          <li
              v-for="(navLink, index) in navLinks"
              :key="index"
          >
            <router-link
                v-if="navLink.linkName==='Sell'"
                class="sell" :to="navLink.to"
            >
              {{ navLink.linkName }}
            </router-link>

            <template v-else-if="!authenticated">
              <router-link
                  :to="navLink.to"
              >
                {{ navLink.linkName }}
              </router-link>
            </template>

          </li>
        </ul>

      </div>
    </div>
  </header>
</template>

<script>
import {defineComponent} from "vue";
import {mapGetters} from "vuex"

export default defineComponent({
  name: "web-view-nav",
  props: ["navLinks"],

  computed: {
    ...mapGetters(['user']),
    ...mapGetters(['authenticated'])
  },

})
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  background-color: var(--web-view-header-background-color, #F9F9F9);
  z-index: 100;
  /*padding: 0 4.5rem;*/
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  top: 0;
}
.header__inner {
  height: 10rem;
  display: flex;
  align-items: center;
}
.header__inner>a {
  margin-right: auto;
}
.header__inner img {
  width: 10rem;
  margin-right: auto;
}
.header__inner ul {
  display: flex;
  /*margin-left: auto;*/
}
.header__inner ul li a {
  font-size: var(--fs-16);
  line-height: 2.4rem;
  font-family: var(--inter);
  height: 4.8rem;
  width: 12.2rem;
  border-radius: .4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  margin-right: .2rem;
  text-transform: uppercase;
}
.header__inner svg {
  cursor: pointer;
}
.sell {
  margin-left: 1.6rem;
  background-color: var(--primary-color);
  color: var(--color-white) !important;
}
.logged-in__status {
  margin-right: .8rem;
  display: flex;
}
.circles {
  margin-right: 2.3rem;
  display: flex;
}
.circle {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  background-color: var(--color-white);
  margin-right: 1.1rem;
  display: flex;
}
.circle svg {
  margin: auto;
}
.circle:last-child {
  margin-right: 0;
}
.user__avatar {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
}
.user__avatar img {
  width: 100%;
  object-fit: cover;
}

</style>