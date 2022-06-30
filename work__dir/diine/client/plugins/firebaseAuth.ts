import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp

  const config = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
  };

  const app = initializeApp(firebaseConfig);

  console.log(app);
  
})