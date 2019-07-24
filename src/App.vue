<template>
  <div id="app">
    <AirQuality/>
    <LoadingView v-if="loading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from './store.js';

// Components
import AirQuality from './components/AirQuality.vue';
import LoadingView from './components/LoadingView';

export default {
  store,
  name: 'app',
  components: {
    AirQuality,
    LoadingView
  },
  computed: {
    ...mapState(['loading'])
  }
}
</script>

<style lang="scss">
@import './scss/_mixin.scss';
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
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
[class*="col-"] {
  padding-right: 15px;
  padding-left: 15px;
}
.col-4, .col-6, .col-8 {
  flex: 0 0 100%;
  max-width: 100%;
}
.green {
  background-color: $primaryGreen;
}
.yellow {
  background-color: $primaryYellow;
}
.orange {
  background-color: $primaryOrange;
}
.red {
  background-color: $primaryRed;
}
.purple {
  background-color: $primaryPurple;
}
.pink {
  background-color: $primaryPink;
}
@media all and (min-width: 767px) {
  .col-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-8 {
    flex: 0 0 66.66666%; 
    max-width: 66.66666;
  }
}
</style>
