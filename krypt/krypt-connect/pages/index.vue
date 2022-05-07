<template>
  <div class="relative top-70">
    <Hero />
    <News />
    <Wallets />
  </div>
</template>

<script>
import Hero from '../components/hero'
import News from '../components/news'
import Wallets from '../components/wallets'

export default {
  name: 'IndexPage',
  head: {
    title: 'Manage Your Wallet'
  },
  components: {
    Hero,
    News,
    Wallets
  }
}
</script>
