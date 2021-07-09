<template>
  <div class="login">
    <div class="container">
      <div class="login__inner">

        <form @submit.prevent="login">

          <h1 class="form__title">Login</h1>

          <div class="form__control">
            <label>Email</label>
            <text-input
                placeholder="email"
                v-model="email"
                input-type="email"
            ></text-input>
          </div>

          <div class="form__control">
            <label>Password</label>
            <password-input
                placeholder="password"
                :input-type="passwordInputType"
                v-model="password"
                @hide-password="hidePassword"
            ></password-input>
          </div>

          <submit
              display-text="Login"
          ></submit>

        </form>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import Submit from "@/components/core-ui/buttons/submit.vue";
import PasswordInput from "@/components/core-ui/inputs/password-input.vue";
import TextInput from "@/components/core-ui/inputs/text-input.vue";

export default defineComponent({
  name: "Login",
  components: {Submit, PasswordInput, TextInput},
  setup () {
    const email = ref('')
    const passwordInputType = ref('password')
    const password = ref('')

    /* Methods **/
    const hidePassword = () => {
      passwordInputType.value === 'password'
          ? passwordInputType.value = 'text'
          : passwordInputType.value = 'password'
    }

    const login = () => {
      alert(email.value)
    }

    return {
      email,
      passwordInputType,
      password,
      hidePassword,
      login,
    }
  }
})
</script>

<style scoped>
form {
  width: 40rem;
  margin: 10rem auto;
}
.form__title {
  font-size: var(--fs-32);
  margin-bottom: 2rem;
  color: var(--primary-color);
}
.form__control {
  margin-bottom: 2rem;
}
label {
  margin-bottom: .5rem;
  display: block;
  font-size: var(--fs-12);
  font-weight: var(--font-weight-medium);
}

</style>