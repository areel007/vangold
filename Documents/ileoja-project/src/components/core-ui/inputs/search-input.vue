<template>
  <div class="search-box">

    <input
        type="text"
        placeholder="Type your search here"
        :value='modelValue'
        @input='$emit("update:modelValue", $event.target.value)'
    >

    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="search-svg"
        @click="$emit('search')"
    >
      <path d="M23.7068 22.2929L16.8818 15.468C18.2038 13.835 18.9998
      11.76 18.9998 9.50004C18.9998 4.2621 14.7378 0.00012207 9.49988
      0.00012207C4.26193 0.00012207 0 4.26205 0 9.5C0 14.7379 4.26197
      18.9999 9.49992 18.9999C11.7599 18.9999 13.8349 18.2039 15.4678
      16.8819L22.2928 23.7069C22.4878 23.9019 22.7438 23.9999 22.9998
      23.9999C23.2558 23.9999 23.5118 23.9019 23.7068 23.7069C24.0978
      23.3159 24.0978 22.6839 23.7068 22.2929ZM9.49992 16.9999C5.36395
      16.9999 2 13.636 2 9.5C2 5.36402 5.36395 2.00007 9.49992
      2.00007C13.6359 2.00007 16.9998 5.36402 16.9998 9.5C16.9998 13.636
      13.6359 16.9999 9.49992 16.9999Z" fill="#6A6B6C"/>
    </svg>

  </div>
</template>

<script>
export default {
  name: "search-input",
  props: ["modelValue"]
}
</script>

<style scoped>
.search-box {
  width: var(--search-box-width, 100%);
  display: flex;
  align-items: center;
  background-color: var(--search-box-background-color, var(--color-white));
  border-radius: 4rem;
}
.search-box input {
  width: 85%;
  border: none;
  outline: none;
  padding: 1.8rem 3.4rem;
  font-size: var(--fs-16);
  margin-right: auto;
  background-color: var(--color-white);
  border-radius: 4rem 0 0 4rem;
}
.search-box input::placeholder {
  font-size: var(--fs-16);
  color: var(--secondary-color);
  line-height: 2.4rem;
}
.search-box svg {
  cursor: pointer;
  margin-right: auto;
  width: 1.8rem;
  height: 1.8rem;
}
.search-box svg path {
  fill: var(--color-white);
}
.is-favorite path {
  fill: var(--secondary-color);
}

</style>