<template>
  <div class="register">
    <div class="container">
      <div class="register__inner">

        <form @submit.prevent="register">

          <h1 class="form__title">Register</h1>

          <div class="form__control">
            <label>Firstname</label>
            <text-input
                placeholder="firstname"
                v-model="firstname"
                input-type="text"
            ></text-input>
          </div>

          <div class="form__control">
            <label>Lastname</label>
            <text-input
                placeholder="lastname"
                v-model="lastname"
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
              display-text="Register"
          ></submit>

        </form>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import TextInput from "@/components/core-ui/inputs/text-input.vue";
import PasswordInput from "@/components/core-ui/inputs/password-input.vue";
import Submit from "@/components/core-ui/buttons/submit.vue";

export default defineComponent({
  name: "Register",
  components: {Submit, PasswordInput, TextInput},
  setup () {
    const firstname = ref('')
    const lastname = ref('')
    const passwordInputType = ref('password')
    const password = ref('')

    /* Methods **/
    const hidePassword = () => {
      passwordInputType.value === 'password'
          ? passwordInputType.value = 'text'
          : passwordInputType.value = 'password'
    }

    const register = () => {
      alert(firstname.value)
    }

    return {
      firstname,
      lastname,
      passwordInputType,
      password,
      hidePassword,
      register,
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