<template>
  <div class="container mx-auto mb-10 md:mb-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 px-4 lg:px-0">
    <div>
      <img class="w-12 md:w-1/6 mb-3" src="../static/images/task_alt_black_24dp.svg" alt="check">
      <h3 class="mb-2 text-20 text-blue font-bold capitalize">Protocol</h3>
      <p class="text-14 md:text-16 text-white">Krypt Connect is not only an app, but an open protocol to communicate securely between Wallets and Dapps (Web3 Apps).</p>
    </div>
    <div>
      <img class="w-12 md:w-1/6 mb-3" src="../static/images/task_alt_black_24dp.svg" alt="check">
      <h3 class="mb-2 text-20 text-blue font-bold capitalize">Secure Encryption</h3>
      <p class="text-14 md:text-16 text-white">The protocol establishes a remote connection between two apps and/or devices. These payloads are symmetrically encrypted through a shared key between the two peers.</p>
    </div>
    <div>
      <img class="w-12 md:w-1/6 mb-3" src="../static/images/task_alt_black_24dp.svg" alt="check">
      <h3 class="mb-2 text-20 text-blue font-bold capitalize">QR Codes & Deep Links</h3>
      <p class="text-14 md:text-16 text-white">The connection is initiated by one peer displaying a QR Code or deep link with a standard WalletConnect URI and is established when the counter-party approves this connection request.</p>
    </div>
    <div>
      <img class="w-12 md:w-1/6 mb-3" src="../static/images/task_alt_black_24dp.svg" alt="check">
      <h3 class="mb-2 text-20 text-blue font-bold">Push Server</h3>
      <p class="text-14 md:text-16 text-white">Also included is an optional Push server to allow native applications to notify the user of incoming payloads for established connections.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "news"
}
</script>

<style scoped>

</style>
