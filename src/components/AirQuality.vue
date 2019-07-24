<template>
  <div class="outer-wrapper">
    <div class="wrapper">

      <!-- 上方標題區域開始 -->
      <section class="title">
        <div>
          <p>空氣品質指標(AQI)</p>
          <div class="custom-select">
            <select 
              v-model="city"
              @change="queryByCity($event)"
            >
              <option 
                disabled
                :value="''"
              >
                請選澤地區
              </option>
              <option 
                v-for="(city, index) in citySelects"
                :key="index"
                :value="city"
              >
                {{ city }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <table class="table-bordered">
            <thead>
              <tr>
                <th  
                  v-for="(item, index) in statusList"
                  :key="index"
                >
                  {{ item.lowerLimit }}~{{ item.upperLimit }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td 
                  v-for="(item, index) in statusList"
                  :key="index"
                >
                  {{ item.status }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <!-- 上方標題區域結束 -->

      <!-- 當前縣市區域開始 -->
      <section 
        class="city"
        v-if="selectedList.length"
      >
        <div>
          {{ city }}
        </div>
        <div class="dotted-line"></div>
        <div>
          {{ queryTime }} 更新
        </div>
      </section>
      <!-- 當前縣市區域結束 -->

      <!-- 各區域指標數值開始 -->
      <section
        class="site row"
        v-if="getFirstSite"
      >
        <div class="col-4 mb-15">
          <div class="combination">
            <span>
              {{ getFirstSite.SiteName }}
            </span>
            <span>
              {{ getFirstSite.AQI  }}
            </span>
          </div>
          <ul class="detail">

            <!-- 臭氧項目開始 -->
            <li>
              <span class="item-name">
                臭氧
              </span>
              <span class="subtitle">
                O3 (ppb)
              </span>
              <span class="amount">
                {{ getFirstSite.O3  }}
              </span>
            </li>
            <!-- 臭氧項目結束 -->

            <!-- 懸浮微粒項目開始 -->
            <li>
              <span class="item-name">
                懸浮微粒
              </span>
              <span class="subtitle">
                PM10 (μg/m³)
              </span>
              <span class="amount">
                {{ getFirstSite.PM10  }}
              </span>
            </li>
            <!-- 懸浮微粒項目結束 -->

            <!-- 細懸浮微粒項目開始 -->
            <li>
              <span class="item-name">
                細懸浮微粒
              </span>
              <span class="subtitle">
                PM2.5 (μg/m³)
              </span>
              <span class="amount">
                {{ getFirstSite.PM2dot5  }}
              </span>
            </li>
            <!-- 細懸浮微粒項目結束 -->

            <!-- 一氧化碳項目開始 -->
            <li>
              <span class="item-name">
                一氧化碳
              </span>
              <span class="subtitle">
                CO (ppm)
              </span>
              <span class="amount">
                {{ getFirstSite.CO  }}
              </span>
            </li>
            <!-- 一氧化碳項目結束 -->

            <!-- 二氧化硫項目開始 -->
            <li>
              <span class="item-name">
                二氧化硫
              </span>
              <span class="subtitle">
                SO2 (ppb)
              </span>
              <span class="amount">
                {{ getFirstSite.SO2  }}
              </span>
            </li>
            <!-- 二氧化硫項目結束 -->

            <!-- 二氧化氮項目開始 -->
            <li>
              <span class="item-name">
                二氧化氮
              </span>
              <span class="subtitle">
                NO2 (ppb)
              </span>
              <span class="amount">
                {{ getFirstSite.NO2  }}
              </span>
            </li>
            <!-- 二氧化氮項目開始 -->

          </ul>
        </div>
        <div class="col-8">
          <div class="row aqi-list">

            <div 
              class="col-6 mb-15"
              v-for="(aqi, index) in selectedList"
              :key="index"
              @click="setFirstSite(aqi)"
            >
              <div class="combination">
                <span>
                  {{ aqi.SiteName }}
                </span>
                <span>
                  {{ aqi.AQI }}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
      <!-- 各區域指標數值結束 -->
    
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

// Other libraries
import * as moment from 'moment';

export default {
  name: 'AirQuality',
  data() {
    return {
      city: '',
      queryTime: '',
      clickedAqi: null,
      selectedList: [],
      statusList: [
        {
          lowerLimit: 0,
          upperLimit: 50,
          status: '良好'
        },
        {
          lowerLimit: 51,
          upperLimit: 100,
          status: '普通'
        },
        {
          lowerLimit: 101,
          upperLimit: 150,
          status: '對敏感族群不健康'
        },
        {
          lowerLimit: 151,
          upperLimit: 200,
          status: '對所有族群不健康'
        },
        {
          lowerLimit: 201,
          upperLimit: 300,
          status: '非常不健康'
        },
        {
          lowerLimit: 301,
          upperLimit: 400,
          status: '危害'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      aqiList: 'aqiList'
    }),
    ...mapGetters({
      citySelects: 'getSelects'
    }),
    getFirstSite() {
      return this.clickedAqi || this.selectedList[0];
    }
  },
  methods: {
    ...mapActions({
      getData: 'getAQIData'
    }),
    queryByCity(event) {

      this.clickedAqi = null;

      const val = event.target.value;

      this.selectedList = this
                            .aqiList
                            .filter((aqi) => {
                              return aqi.County === val;
                            });

    },
    setFirstSite(aqi) {
      this.clickedAqi = aqi;
    }
  },
  mounted() {

    this
      .getData()
      .then(() => {
        this.queryTime = moment().format('YYYY-MM-DD HH:mm');
      })

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
.combination {
  display: flex;
  border: 3px solid $primaryBlack;
  & span:first-child {
    flex: 1 1 55%;
    border-right: 3px solid $primaryBlack;
  }
  span {
    flex: 1 1 45%;
    padding: 20px 15px;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
}
.detail {
  margin: 0;
  border: 3px solid $primaryBlack;
  border-top: none;
  padding: 15px 25px;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $primaryBlack; 
    padding: 20px 0;

    &:last-child {
      border-bottom: none;
    }
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
.mb-15 {
  margin-bottom: 15px;
}
.aqi-list .combination {
  cursor: pointer;
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
