<template>
  <h6>{{ title }}</h6>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "section-title",
  props: ["title"]
})
</script>

<style scoped>
h6 {
  text-transform: capitalize;
  color: var(--secondary-color);
  font-size: var(--title-font-size, 2rem);
  line-height: 2.4rem;
  font-weight: var(--font-weight-medium);
  position: relative;
}
h6:before {
  content: '';
  position: absolute;
  bottom: -.8rem;
  width: 4.75rem;
  height: .2rem;
  background-color: var(--primary-color);
}

</style>