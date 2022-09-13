import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: [
    
  ],
  css: [
    '@/assets/css/main.css',
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
   buildModules: [
    
  ],
  
});