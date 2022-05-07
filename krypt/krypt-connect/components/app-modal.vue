<template>
  <div class="modal" v-if="showModal">
    <div class="overlay">
    </div>
    <div class="modal__modal">
      <svg @click="$router.push('/')" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fixed right-2 top-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <div class="p-5 w-full relative mb-10 input-box" :class="{'change-input-box-border': showLoader}" >
        <AppLoader :loading="showLoader" :color="'#0E1A2E'" />
        <span class="block text-red-600" v-if="!showLoader">Error Connecting...</span>
        <button @click="connectManually" class="absolute top-12 bg-primary text-white py-2 px-4 rounded" v-if="!showLoader">Connect Manually</button>
      </div>
      <div class="border border-gray-600 p-4">
        <div class="">
          <h2 class="font-bold text-primary">Krypt Connect</h2>
          <span>Easy-to-use browser extension.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoader from '../components/app-loader'

export default {
  name: "app-modal",
  components: {
    AppLoader
  },
  props: ['showModal'],
  data () {
    return {
      showLoader: true,
    }
  },
  methods: {
    connectManually () {
      this.$emit('connect-manually')
    }
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false
    }, 5000)
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 50;
}
.overlay {
  width: 100%;
  height: 100vh;
  background: #000;
  opacity: .7;
}
.modal__modal {
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  padding: 50px;
  background: white;
  z-index: 60 !important;
}
.input-box {
  border: 2px solid red;
}
.change-input-box-border {
  border: 2px solid green;
}

@media screen and (max-width: 768px) {
  .modal__modal {
    width: 95%;
  }
}
</style>
