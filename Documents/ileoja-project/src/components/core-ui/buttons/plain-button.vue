<template>
  <button @click.prevent="$emit('button-action')">{{ displayText }}</button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "plain-button",
  props: ["displayText"]
})
</script>

<style scoped>
button {
  width: var(--plain-button-width, 100%);
  height: var(--plain-button-height, 4.8rem);
  padding: var(--plain-button-padding, 1.6rem 11.1rem);
  background-color: var(--plain-button-background-color, var(--primary-color));
  color: var(--plain-button-color, var(--color-white));
  font-size: var(--plain-button-font-size, var(--fs-14));
  text-transform: uppercase;
  border: var(--plain-button-border, 1px solid transparent);
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  border-radius: var(--plain-button-border-radius, .4rem);
  box-shadow: var(--plain-button-box-shadow, 0px 2px 4px rgba(0, 0, 0, 0.15));
  letter-spacing: 1.25px;
}

</style>