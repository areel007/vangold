<template>
  <div class="login">
    <div class="overlay"></div>
    <div class="login__inner">
      <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          class="close-svg"
          @click="$router.go(-1)"
      >
        <path d="M15.3636 2.63636C13.6629 0.935606 11.4053 0 9 0C6.5947 0
        4.33712 0.935606 2.63636 2.63636C0.935606 4.33712 0 6.5947 0 9C0
        11.4053 0.935606 13.6629 2.63636 15.3636C4.33712 17.0644 6.5947
        18 9 18C11.4053 18 13.6629 17.0644 15.3636 15.3636C17.0644 13.6629
        18 11.4053 18 9C18 6.5947 17.0644 4.33712 15.3636 2.63636ZM14.6402
        14.6402C13.1326 16.1477 11.1288 16.9773 9 16.9773C6.87121 16.9773
        4.86742 16.1477 3.35985 14.6402C0.25 11.5303 0.25 6.4697 3.35985
        3.35985C4.86742 1.85227 6.87121 1.02273 9 1.02273C11.1288 1.02273
        13.1326 1.85227 14.6402 3.35985C17.75 6.4697 17.75 11.5303 14.6402
        14.6402Z" fill="black"/>
        <path d="M12.9659 5.03405C12.7652 4.83329 12.4432 4.83329 12.2424
        5.03405L9.00002 8.27648L5.7576 5.03405C5.55684 4.83329 5.23487 4.83329
        5.03411 5.03405C4.83336 5.23481 4.83336 5.55678 5.03411 5.75754L8.27653
        8.99996L5.03411 12.2424C4.83336 12.4431 4.83336 12.7651 5.03411 12.9659C5.1326
        13.0644 5.26517 13.1174 5.39396 13.1174C5.52275 13.1174 5.65532 13.0681 5.75381
        12.9659L8.99623 9.72345L12.2386 12.9659C12.3371 13.0644 12.4697 13.1174 12.5985
        13.1174C12.7311 13.1174 12.8599 13.0681 12.9583 12.9659C13.1591 12.7651 13.1591
        12.4431 12.9583 12.2424L9.7235 8.99996L12.9659 5.75754C13.1667 5.55678 13.1667
        5.23481 12.9659 5.03405Z" fill="black"/>
      </svg>
      <section-title title="login"></section-title>
      <form @submit.prevent="login">

        <div class="form__control">
          <text-input
              placeholder="email"
              v-model="user.username"
              input-type="text"
          ></text-input>
        </div>

        <div class="form__control">
          <password-input
              placeholder="password"
              :input-type="passwordInputType"
              v-model="user.password"
              @hide-password="hidePassword"
          ></password-input>
        </div>

        <router-link to="/forgot-password" class="forgot-password">Forgot your password ?</router-link>

        <submit
            display-text="Login"
        ></submit>

        <p class="register">Don't have an account? <router-link to="/register">Register</router-link></p>

      </form>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Submit from "../../components/core-ui/buttons/submit";
import PasswordInput from "../../components/core-ui/inputs/password-input";
import TextInput from "../../components/core-ui/inputs/text-input";
import SectionTitle from "../../components/core-ui/titles/section-title.vue";
import {mapActions} from "vuex";

export default defineComponent({
  name: "Login",
  components: {SectionTitle, Submit, PasswordInput, TextInput},
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      passwordInputType: 'password'
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    hidePassword () {
      this.passwordInputType === 'password'
          ? this.passwordInputType = 'text'
          : this.passwordInputType = 'password'
    },
    login () {
      this.loginUser(this.user)
      this.$router.push('/')
    }

  },

})
</script>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}
.overlay {
  background-color: rgba(0, 0, 0, .9);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 500;
}
.login__inner {
  padding: 8rem;
  background-color: #F9F9F9;
  z-index: 1000;
  --icon-button-height: 4.8rem;
  --icon-button-border: 1px solid var(--secondary-color);
  --title-margin-bottom: 2.5rem;
  position: relative;
}
.form__control {
  margin-bottom: 1.4rem;
  width: 35.7rem;
  --text-input-bg: #f9f9f9;
  --password-input-bg: #f9f9f9;
}
label {
  margin-bottom: .5rem;
  display: block;
  font-size: var(--fs-12);
  font-weight: var(--font-weight-medium);
}
form>a {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-medium);
  font-size: var(--fs-14);
  line-height: 1.5rem;
  letter-spacing: 0.1px;
  text-decoration-line: underline;
  color: #FD6649;
  margin-bottom: 4rem;
  display: block;
}
.register {
  text-align: center;
  margin-bottom: 2.2rem;
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-normal);
  font-size: var(--fs-12);
  line-height: 1.6rem;
  letter-spacing: 0.4px;
  color: var(--secondary-color);
  margin-top: 4.6rem;
}
.register>a {
  font-family: var(--montserat);
  font-style: normal;
  font-weight: var(--font-weight-medium);
  font-size: var(--fs-14);
  line-height: 1.5rem;
  text-align: center;
  letter-spacing: 0.1px;
  color: var(--primary-color);
}
.close-svg {
  position: absolute;
  right: 2.6rem;
  top: 2.6rem;
  cursor: pointer;
}

</style>