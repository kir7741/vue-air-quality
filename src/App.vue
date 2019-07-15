<template>
  <div id="app">
    <AirQuality/>
    <LoadingView/>
  </div>
</template>

<script>
import AirQuality from './components/AirQuality.vue';
import LoadingView from './components/LoadingView';

export default {
  name: 'app',
  components: {
    AirQuality,
    LoadingView
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
