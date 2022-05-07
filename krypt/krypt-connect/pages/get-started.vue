<template>
  <div class="container mx-auto relative top-70 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5 md:py-20">
    <AppModal :show-modal="showModal" @connect-manually="connectManually" />
    <TokenCard
      v-for="token in tokens"
      :key="token.name"
      :token="token"
      @card-action="cardAction($event)"
    />
  </div>
</template>

<script>
import TokenCard from "../components/token-card";
import AppModal from "../components/app-modal";
export default {
  name: "get-started",
  components: {AppModal, TokenCard},
  head: {
    title: 'Wallets'
  },
  data () {
    return {
      showModal: false,
      cardName: null,
      tokens: [
        {
          name: 'Trust wallet',
          image: 'trust-wallet-token.png'
        },
        {
          name: 'Ledger wallet',
          image: 'Ledger-wallet-token.png'
        },
        {
          name: 'Mew wallet',
          image: 'mew-wallet-token.png'
        },
        {
          name: 'Meta mask wallet',
          image: 'meta-mask-wallet-token.png'
        },
        {
          name: 'Coinbase wallet',
          image: 'coinbase-wallet-token.png'
        },
        {
          name: 'Exodus wallet',
          image: 'exodus-wallet-token.png'
        },
        {
          name: 'wallet access pass',
          image: 'wallet-access-pass.png'
        },
        {
          name: 'atomic wallet',
          image: 'atomic-wallet-token.png'
        },
        {
          name: 'Safepal wallet',
          image: 'safepal-wallet.png'
        },
        {
          name: 'Uniswap wallet',
          image: 'uniswap-wallet.jpg'
        },
        {
          name: 'Pancake wallet',
          image: 'pancake-wallet.png'
        },
        {
          name: 'Binance Smart Chain',
          image: 'bep20.png'
        },
        {
          name: 'BNB',
          image: 'bnb.png'
        },
        {
          name: 'Opensea NFT',
          image: 'opensea.svg'
        },
        {
          name: 'Bakery Swap',
          image: 'bakery-swap.png'
        },
        {
          name: 'Avalanche',
          image: 'avax.png'
        },
        {
          name: 'Solana',
          image: 'solana.png'
        },
        {
          name: 'Polkadot',
          image: 'polkadot.png'
        },
        {
          name: 'XRP',
          image: 'xrp.png'
        },
        {
          name: 'Stellar',
          image: 'stellar.png'
        },
        {
          name: 'Tezos',
          image: 'tezos.png'
        },
        {
          name: 'Theta',
          image: 'theta.png'
        },
        {
          name: 'Tron',
          image: 'tron.png'
        },
        {
          name: 'Cosmos',
          image: 'cosmos.png'
        },
        {
          name: 'Kava',
          image: 'kava.png'
        },
        {
          name: 'Filecoin',
          image: 'filecoin.png'
        },
        {
          name: 'Ethereum Classic',
          image: 'ethereum-classic.png'
        },
        {
          name: 'Zilliqa',
          image: 'zilliqa.png'
        },
        {
          name: 'Elrond',
          image: 'elrond.jpg'
        },
        {
          name: 'Waves',
          image: 'waves.png'
        },
        {
          name: 'ICON',
          image: 'icon.png'
        },
        {
          name: 'Ontology',
          image: 'ontology.png'
        },
        {
          name: 'OntologyOxen Wallet',
          image: 'oxen.png'
        },
        {
          name: 'Nano',
          image: 'nano.png'
        },
        {
          name: 'Tomo Chain',
          image: 'tomo.png'
        },
        {
          name: 'VeChain',
          image: 'vechain.jpg'
        },
        {
          name: 'IoTex',
          image: 'iotex.png'
        },
        {
          name: 'Wanchain',
          image: 'wanchain.png'
        },
        {
          name: 'Harmony',
          image: 'harmony.png'
        },
        {
          name: 'Kin',
          image: 'kin.png'
        },
        {
          name: 'Nimiq',
          image: 'nimiq.png'
        },
        {
          name: 'Aion',
          image: 'aion.png'
        },
        {
          name: 'Thunder Token',
          image: 'thundertoken.png'
        },
        {
          name: 'Aeternity',
          image: 'aeternity.png'
        },
        {
          name: 'Nebulas',
          image: 'nebulas.png'
        },
        {
          name: 'Fio',
          image: 'fio.png'
        },
        {
          name: 'GoChain',
          image: 'gochain.png'
        },
        {
          name: 'POA Network',
          image: 'poa.png'
        },
        {
          name: 'Callisto',
          image: 'callisto.png'
        },
        {
          name: 'BitPay',
          image: 'bitpay.jpg'
        },
        {
          name: 'Aktionariat',
          image: 'aktionariat.png'
        },
        {
          name: 'AtWallet',
          image: 'atwallet.png'
        },
        {
          name: 'Guard Wallet',
          image: 'guard.png'
        },
        {
          name: 'AAVE',
          image: 'aave.jpg'
        },
        {
          name: 'Enjin',
          image: 'enjin.jpg'
        },
        {
          name: 'Skale',
          image: 'skale.png'
        },
        {
          name: 'Portis',
          image: 'portis.png'
        },
        {
          name: 'Trezor',
          image: 'trezor.png'
        },
        {
          name: 'Squarelink',
          image: 'squarelink.png'
        },
        {
          name: 'Torus',
          image: 'torus.jpg'
        },
        {
          name: 'Scatter Wallet',
          image: 'scatter.jpg'
        },
        {
          name: 'Sumcoin',
          image: 'sumcoin.png'
        },
        {
          name: 'Math Wallet',
          image: 'math-wallet.png'
        },
        {
          name: 'FortMatic',
          image: 'fortmatic.png'
        },
        {
          name: 'Digitex',
          image: 'digitex.png'
        },
        {
          name: 'Defiat',
          image: 'defiat.jpg'
        },
        {
          name: 'Authereum',
          image: 'authereum.png'
        },
        {
          name: 'Flare Wallet',
          image: 'flare.jpg'
        },
        {
          name: 'Zelcore',
          image: 'zelcore.png'
        },
        {
          name: 'BitKeep',
          image: 'bitkeep.png'
        },
        {
          name: 'Coin98',
          image: 'coin98.png'
        },
        {
          name: 'Trust Vault',
          image: 'trustvault.png'
        },
      ]
    }
  },
  methods: {
    cardAction (e) {
      this.showModal = true
      this.cardName = e
    },
    connectManually () {
      this.showModal = false
      this.$router.push(`/token/${this.cardName}`)
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .container {
    width: 80%;
  }
}
</style>
