<template>
  <div class="banner">
    <div class="overlay"></div>
    <div class="container">
      <div class="banner__inner">
        <img src="../../../assets/images/banner-img.png" alt="banner">
        <div class="search">
          <div class="location__search">
            <span class="find-anything">Find anything in</span>
            <button>
              <span class="all-nigeria">All Nigeria</span>
              <svg
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
              >
                <path d="M6 0C3.05925 0 0.666656 2.39259 0.666656 5.33334C0.666656 6.21616
                0.887375 7.09147 1.30697 7.86784L5.70834 15.8281C5.76694 15.9342 5.87859
                16 6 16C6.1214 16 6.23306 15.9342 6.29165 15.8281L10.6947 7.86522C11.1126
                7.09147 11.3333 6.21613 11.3333 5.33331C11.3333 2.39259 8.94075 0 6 0ZM6
                8C4.52962 8 3.33334 6.80372 3.33334 5.33334C3.33334 3.86297 4.52962
                2.66669 6 2.66669C7.47037 2.66669 8.66665 3.86297 8.66665 5.33334C8.66665
                6.80372 7.47037 8 6 8Z" fill="black"
                />
              </svg>

            </button>
          </div>
          <search-input></search-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "../inputs/search-input";
import {ref} from "vue";

export default {
  name: "banner",
  components: {SearchInput},
  setup () {
    const searchInput = ref("")

    const search = () => {
      alert('Clicked')
    }


    return {
      searchInput,
      search,
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  background-color: var(--primary-color);
}
.banner__inner {
  height: 31rem;
  display: flex;
  justify-content: center;
  align-items: center;
  --search-box-width: 67.7rem;
  --search-box-background-color: #000;
  position: relative;
}
.overlay {
  width: 100%;
  height: 31rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--primary-color);
  opacity: .9;
  z-index: 10;
}
.search {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 31rem;
  object-fit: cover;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.location__search {
  margin-bottom: 4.3rem;
  display: flex;
  align-items: center;
}
.find-anything {
  margin-right: 1rem;
  font-family: var(--montserat);
  font-size: var(--fs-16);
  line-height: 2.4rem;
  text-align: center;
  color: var(--color-white);
}
.location__search button {
  width: 11.8rem;
  height: 3.2rem;
  border-radius: 3rem;
  outline: none;
  border: 1px solid transparent;
  padding: .8rem;
  font-size: var(--fs-14);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.all-nigeria {
  color: #000;
  margin-right: .6rem;
}


</style>