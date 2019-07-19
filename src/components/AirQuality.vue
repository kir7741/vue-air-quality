<template>
  <div class="outer-wrapper">
    <div class="wrapper">

      <!-- 上方標題區域開始 -->
      <section class="title">
        <div>
          <p>空氣品質指標(AQI)</p>
          <div class="custom-select">
            <select>
              <option 
                disabled
                :value="null"
              >
                請選澤地區
              </option>
            </select>
          </div>
        </div>
        <div>
          <table class="table-bordered">
            <thead>
              <tr>
                <th>0~50</th>
                <th>51~100</th>
                <th>101~150</th>
                <th>151~200</th>
                <th>201~300</th>
                <th>301~400</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>良好</td>
                <td>普通</td>
                <td>對敏感族群不健康</td>
                <td>對所有族群不健康</td>
                <td>非常不健康</td>
                <td>危害</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <!-- 上方標題區域結束 -->

      <!-- 當前縣市區域開始 -->
      <section class="city"></section>
      <!-- 當前縣市區域結束 -->

      <!-- 各區域指標數值開始 -->
      <section class="site"></section>
      <!-- 各區域指標數值結束 -->
    
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'AirQuality',
  methods: {
    ...mapActions({
      getData: 'getAQIData'
    })
  },
  mounted() {
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/_mixin.scss';
.outer-wrapper {
  height: 100%;
}
.wrapper {
  margin: 0 auto;
  padding: 20px 30px;
  max-width: 1280px;
}
.title {
  display: flex;
  flex-direction: column;
  p {
    margin: 0 0 10px 0;
    font-size: 2rem;
    letter-spacing: 1px;
    font-weight: bold;
  }
  div:first-child {
    margin-bottom: 15px;
  }
  div:last-child {
    overflow-x: auto;
  }
}
.custom-select {
  position: relative;
  &:before {

  }
  &:after {
    
  }
  select {
    border: 3px solid #121212;
    padding: 17px;
    width: 100%;
    outline: 0;
    appearance: none;
    letter-spacing: 1px;
  }
}

.table-bordered {
  border-collapse: collapse;
  border: 1px solid $primaryBlack;
  text-align: center;
  th, td {
    border: 3px solid black;
    padding: 0.45rem;
    width: 120px;
    height: 55px;
  } 
  td {
    font-weight: bold;
  }
}

@media screen and (min-width: 767px) {

  .custom-select select {
    width: 350px;
  }
  .title {
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 50px;
    p {
      font-size: 2.5rem;
    }
    div:first-child {
      margin-bottom: 0px;
    }
  }
}
</style>
