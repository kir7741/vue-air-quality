import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// Models
import Aqi from './class/aqi';

Vue.use(Vuex);  

const store = new Vuex.Store({
  state: {
    loading: false,
    aqiList: []
  },
  mutations: {
    toggleLoading(state, payload) {
      state.loading = payload;
    },
    setAqiList(state, payload) {
      state.aqiList = payload;
    }
  },
  getters: {
    getSelects(state) {

      return state
              .aqiList
              .map(status => status.County)
              .filter((ele, index, self) => {
                return index == self.indexOf(ele);
              });

    }
  },
  actions: {
    getAQIData(context) {

      context.commit('toggleLoading', true);

      const url = `${process.env.VUE_APP_AQI_URL}`;

      return new Promise((resolve, reject) => {

        axios
          .get(url)
          .then((res) => {
            context.commit('toggleLoading', false);

            const datas = res.data || [];
            let aqiList = [];

            if (
              datas &&
              Array.isArray(datas)
            ) {
              aqiList = datas.map(data => new Aqi(data));
              context.commit('setAqiList', aqiList);
            }

            resolve(aqiList);
            
          })
          .catch((error) => {
            context.commit('toggleLoading', false);
            reject(error);
          })

      });

    }
  }
});

export default store;