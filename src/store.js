import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);  

const store = new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    toggleLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    getAQIData(context) {
      context.commit('toggleLoading', true);
      const url = `${process.env.VUE_APP_AQI_URL}/webapi/Data/REWIQA/?format=json`;
      axios
        .get(url)
        .then((res) => {
          context.commit('toggleLoading', false);
          console.log(res);
        })
        .catch((error) => {
          context.commit('toggleLoading', false);
          console.log(error);
        })
    }
  }
});

export default store;