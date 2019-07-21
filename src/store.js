import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// Models
import Aqi from './class/aqi';

Vue.use(Vuex);  

const store = new Vuex.Store({
  state: {
    loading: false,
    statusList: []
  },
  mutations: {
    toggleLoading(state, payload) {
      state.loading = payload;
    },
    setStatusList(state, payload) {
      state.statusList = payload;
    }
  },
  getters: {
    getSelects(state) {

      return state
              .statusList
              .map(status => status.County)
              .filter((ele, index, self) => {
                return index == self.indexOf(ele);
              });

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

          const datas = res.data || [];
          let statusList = [];

          if (
            datas &&
            Array.isArray(datas)
          ) {
            statusList = datas.map(data => new Aqi(data));
            context.commit('setStatusList', statusList);
          }
          
        })
        .catch((error) => {
          context.commit('toggleLoading', false);
          console.log(error);
        })
    }
  }
});

export default store;