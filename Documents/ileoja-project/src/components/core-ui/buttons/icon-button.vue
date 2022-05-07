<template>
  <button>
    <span class="icon">
      <slot></slot>
    </span>
    {{ displayText }}
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "icon-button",
  props: ["displayText"]
})
</script>

<style scoped>
button {
  width: var(--icon-button-width, 100%);
  height: var(--icon-button-height, 4.8rem);
  padding: var(--icon-button-padding, 1.6rem 3.8rem);
  background-color: var(--icon-button-background-color, var(--color-white));
  color: var(--icon-button-color, var(--secondary-color));
  font-size: var(--icon-button-font-size, var(--fs-14));
  text-transform: uppercase;
  border: var(--icon-button-border, 1px solid var(--secondary-color));
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  border-radius: var(--icon-button-border-radius, .4rem);
  box-shadow: var(--icon-button-box-shadow, 0px 2px 4px rgba(0, 0, 0, 0.15));
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.25px;
}
.icon {
  margin-right: 4rem;
}

</style>