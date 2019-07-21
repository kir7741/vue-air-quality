/**
 * 空氣品質模型
 *
 * @export
 * @class Aqi
 */
export default class Aqi {

  /**
   * api 指數
   *
   * @memberof Aqi
   */
  _AQI = '';

  /**
   * 一氧化碳
   *
   * @memberof Aqi
   */
  _CO = '';

  /**
   * 所屬城市
   *
   * @memberof Aqi
   */
  _County = '';

  /**
   * 二氧化氮
   *
   * @memberof Aqi
   */
  _NO2 = '';

  /**
   * 臭氧
   *
   * @memberof Aqi
   */
  _O3 = '';

  /**
   * 細懸浮微粒
   *
   * @memberof Aqi
   */
  _PM2dot5 = '';

  /**
   * 懸浮微粒
   *
   * @memberof Aqi
   */
  _PM10 = '';

  /**
   * 二氧化硫
   *
   * @memberof Aqi
   */
  _SO2 = '';

  /**
   * 站點 id
   *
   * @memberof Aqi
   */
  _SiteId = '';

  /**
   * 站點名稱
   *
   * @memberof Aqi
   */
  _SiteName = '';

  /**
   * 狀態
   *
   * @memberof Aqi
   */
  _Status = '';

  constructor(data) {
    this._AQI = data.AQI || '';
    this._CO = data.CO || ''
    this._County = data.County || '';
    this._NO2 = data.NO2 || '';
    this._O3 = data.O3 || '';
    this._PM2dot5 = data['PM2.5'] || '';
    this._PM10 = data.PM10 || '';
    this._SO2 = data.SO2 || '';
    this._SiteId = data.SiteId || '';
    this._SiteName = data.SiteName || '';
    this._Status = data.Status || '';
  }

  /**
   * 取得 aqi 指數
   *
   * @readonly
   * @memberof Aqi
   */
  get AQI() {
    return this._AQI;
  }

  /**
   * 取得二氧化碳指數
   *
   * @readonly
   * @memberof Aqi
   */
  get CO() {
    return this._CO;
  }

  /**
   * 取得所屬城市
   *
   * @readonly
   * @memberof Aqi
   */
  get County() {
    return this._County;
  }

  /**
   * 取得二氧化氮指數
   *
   * @readonly
   * @memberof Aqi
   */
  get NO2() {
    return this._NO2;
  }

  /**
   * 取得臭氧指數
   *
   * @readonly
   * @memberof Aqi
   */
  get O3() {
    return this._O3;
  }

  /**
   * 取得細懸浮微粒指數
   *
   * @readonly
   * @memberof Aqi
   */
  get PM2dot5() {
    return this._PM2dot5;
  }

  /**
   * 取得懸浮微粒
   *
   * @readonly
   * @memberof Aqi
   */
  get PM10() {
    return this._PM10;
  }

  /**
   * 取得懸浮微粒
   *
   * @readonly
   * @memberof Aqi
   */
  get SO2() {
    return this._SO2;
  }

  /**
   * 取得站點 id
   *
   * @readonly
   * @memberof Aqi
   */
  get SiteId() {
    return this._SiteId;
  }

  /**
   * 取得站點名稱
   *
   * @readonly
   * @memberof Aqi
   */
  get SiteName() {
    return this._SiteName;
  }

  /**
   * 取得狀態
   *
   * @readonly
   * @memberof Aqi
   */
  get Status() {
    return this._Status;
  }

}