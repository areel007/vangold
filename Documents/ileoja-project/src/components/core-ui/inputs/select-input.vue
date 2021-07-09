<template>
  <div class="input-box">
    <select
        :value='modelValue'
        @input='$emit("update:modelValue", $event.target.value)'
    >
      <option value="">Select category</option>
      <option v-for="(value, index) in values" :value="value" :key="index">{{ value }}</option>
    </select>
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.50897 8.93585L0.206451 1.64852C-0.0684357 1.37416 -0.0688576 0.928978 0.205431 0.654162C0.479721 0.379275 0.924904 0.378818 1.19979 0.653107L8.50283 7.94096C8.77698 8.21511 9.22305 8.21511 9.49772 7.94044L16.8002 0.653107C17.0751 0.378818 17.5203 0.379275 17.7946 0.654162C17.9316 0.791376 18 0.97113 18 1.15081C18 1.33099 17.9312 1.51117 17.7935 1.64852L10.4916 8.93532C9.66911 9.75777 8.33088 9.75777 7.50897 8.93585Z" fill="#6A6B6C"/>
    </svg>

  </div>
</template>

<script>
export default {
  name: "select-input",
  props: ["values", "modelValue"]
}
</script>

<style scoped>
.input-box {
  display: flex;
  align-items: center;
  width: var(--select-input-width, 100%);
  position: relative;
}
select {
  padding: 1.6rem 2.9rem;
  width: 100%;
  border: 1px solid var(--secondary-color);
  border-radius: .4rem;
  font-size: var(--fs-16);
  line-height: 2.4rem;
  outline: none;
  margin-right: auto;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  position: relative;
  color: var(--secondary-color);
  text-transform: capitalize;
  cursor: pointer !important;
}
svg {
  position: absolute;
  right: 2.9rem;
}
</style>