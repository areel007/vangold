<template>
  <div class="category-card" @click="$emit('category-card-action')">
    <div class="icon">
      <slot>Svg</slot>
    </div>
    <span>{{ cardDisplayText }}</span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "category-card",
  props: ["cardDisplayText"]
})
</script>

<style scoped>
.category-card {
  width: var(--category-card-width, 11.3rem);
  height: var(--category-card-height, 11.3rem);
  background-color: var(--category-card-background-color, #F9F9F9);
  border-radius: .8rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon {
  margin-bottom: 1.6rem;
}
.category-card span {
  text-transform: uppercase;
  font-size: var(--fs-12);
  line-height: 1.6rem;
  color: var(--secondary-color);
}

</style>