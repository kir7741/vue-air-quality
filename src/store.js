import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);  

const store = new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    toggleLoading(state, payload) {
      state.loading = payload;
    }
  }
});

export default store;