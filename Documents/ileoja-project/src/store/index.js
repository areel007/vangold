import { createStore } from 'vuex'
import states from "./modules/states";
import lgas from "./modules/lgas";
import trending from "./modules/trending";
import category from "./modules/category";
import subcategory from "./modules/sub-category"
import auth from "./modules/auth";

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    states,
    lgas,
    trending,
    category,
    subcategory,
    auth,
  }
})
