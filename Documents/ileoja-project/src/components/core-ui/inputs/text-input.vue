<template>
  <input
      :type="inputType"
      :placeholder="placeholder"
      :value='modelValue'
      @input='$emit("update:modelValue", $event.target.value)'
  >
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "text-input",
  props: ["placeholder", "modelValue", "inputType"]
})
</script>

<style scoped>
input {
  padding: 1.6rem 2.9rem;
  border: 1px solid var(--secondary-color);
  border-radius: .4rem;
  width: var(--text-input-width, 100%);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  outline: none;
  background-color: var(--text-input-bg, var(--color-white));
  margin-bottom: var(--text-input-margin-bottom, 0);
}
::placeholder {
  color: var(--secondary-color);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  text-transform: capitalize;
}

</style>