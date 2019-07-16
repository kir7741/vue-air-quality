<template>
  <div id="app">
    <AirQuality/>
    <LoadingView v-if="loading"/>
  </div>
</template>

<script>
import AirQuality from './components/AirQuality.vue';
import LoadingView from './components/LoadingView';
import store from './store.js';
import { mapState, mapMutations } from 'vuex';

export default {
  store,
  name: 'app',
  components: {
    AirQuality,
    LoadingView
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    ...mapMutations({
      showLoading: 'toggleLoading'
    })
  },
  mounted() {
  }
}
</script>

<style lang="scss">
* {
  box-sizing:border-box;
}
body {
  margin: 0;
}
#app {
  position: relative;
  height: 100vh;
  min-height: 500px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
