<template>
  <div class="container mx-auto relative py-10">
    <div
      class="flex items-center cursor-pointer mb-5"
      @click="$router.push('/get-started')"
    >
      <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
      </svg>
      <span class="text-blue">Back</span>
    </div>
    <div class="border-b border-white py-2 mb-5">
      <span @click="phrase" class="px-2 sm:px-5 py-2 border border-transparent hover:border-white cursor-pointer rounded-md text-white text-12 md:text-14">Phrase</span>
      <span @click="keystoreJson" class="px-2 sm:px-5 py-2 border border-transparent hover:border-white cursor-pointer rounded-md text-white text-12 md:text-14">Keystore JSON</span>
      <span @click="privateKey" class="px-2 sm:px-5 py-2 border border-transparent hover:border-white cursor-pointer rounded-md text-white text-12 md:text-14">Private Key</span>
    </div>
    <Phrase v-if="step === 1" />
    <KeystoreJson v-if="step === 2" />
    <PrivateKey v-if="step === 3" />
  </div>
</template>

<script>
import Phrase from "../../components/phrase";
import KeystoreJson from "../../components/keystore-json";
import PrivateKey from "../../components/private-key";
export default {
  name: "index",
  components: {PrivateKey, KeystoreJson, Phrase},
  layout: 'token',
  head: {
    title: 'Connect Wallets'
  },
  data() {
    return {
      step: 1
    }
  },
  methods: {
    phrase() {
      this.step = 1
    },
    keystoreJson() {
      this.step = 2
    },
    privateKey() {
      this.step = 3
    }
  }
}
</script>

<style scoped>
.container {
  width: 400px;
}
svg {
  fill: #0EA5E9;
  width: 20px;
  height: 20px;
}
@media screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
</style>
