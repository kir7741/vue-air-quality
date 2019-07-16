module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/aqiUrl': {
        target: 'http://opendata.epa.gov.tw',
        changeOrigin: true,
        pathRewrite: {
          '^/aqiUrl': ''
        }
      }
    }
  }
}