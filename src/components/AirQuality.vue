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
      <section class="city">
        <div>高雄市</div>
        <div class="dotted-line"></div>
        <div>2019-01-24 14:00 更新</div>
      </section>
      <!-- 當前縣市區域結束 -->

      <!-- 各區域指標數值開始 -->
      <section class="site row">
        <div class="col-4">
          <div class="combination">
            <span>前金</span>
            <span>156</span>
          </div>
          <ul class="detail">
            <li>
              <span class="item-name">
                臭氧
              </span>
              <span class="subtitle">
                O3 (ppb)
              </span>
              <span class="amount">
                82
              </span>
            </li>
          </ul>
        </div>
        <div class="col-8">
          <div class="combination"></div>
        </div>
      </section>
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
@mixin triangle {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  right: 20px;
}
.outer-wrapper {
  height: 100%;
}
.wrapper {
  margin: 0 auto;
  padding: 20px 30px;
  max-width: 1280px;
  section {
    margin-bottom: 20px;
  }
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
    margin-bottom: 20px;
  }
  div:last-child {
    overflow-x: auto;
  }
}
.custom-select {
  position: relative;
  &:before {
    @include triangle;
    border-width: 0 5px 7px 5px;
    border-color: transparent transparent $primaryBlack transparent;
    top: 20px;
  }
  &:after {
    @include triangle;
    border-width: 7px 5px 0 5px;
    border-color: $primaryBlack transparent transparent transparent;
    top: 30px;
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
.city {
  div:nth-child(1) {
    font-size: 2rem;
    font-weight: bold;
  }
  div:nth-child(3) {
    font-weight: bold;
  }
}
.dotted-line {
  position: relative;
  padding: 20px 0;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    border: 1px dashed $primaryBlack;
  }
}
.site {
  div:first-child {

  }
  div:last-child {

  }
}
.combination {
  display: flex;
  border: 3px solid $primaryBlack;
  & span:first-child {
    border-right: 3px solid $primaryBlack;
  }
  span {
    flex: 1;
    padding: 25px 20px;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
}
.detail {
  margin: 0;
  border: 3px solid $primaryBlack;
  border-top: none;
  padding: 10px 20px;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $primaryBlack; 
    padding: 20px 0;
  }
  .item-name {
    margin-right: 10px;
    font-size: 1.7rem;
    font-weight: bold;
  }
  .amount {
    margin-left: auto;
    font-size: 1.7rem;
    font-weight: bold;
  }
}
@media all and (min-width: 767px) {
  .wrapper {
    section {
      margin-bottom: 0px;
    }
  }
  .custom-select select {
    width: 350px;
  }
  .title {
    flex-direction: row;
    justify-content: space-between;
    padding: 25px 50px;
    p {
      font-size: 2.5rem;
    }
    div:first-child {
      margin-bottom: 0px;
    }
  }
  .city {
    display: flex;
    align-items: center;
    padding: 25px 50px;
  }
  .dotted-line {
    margin-right: 20px;
    margin-left: 20px;
    position: relative;
    flex: 1;
  }
  .site {
    padding: 25px 50px;
  }
}
</style>
