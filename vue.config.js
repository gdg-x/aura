module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  productionSourceMap: false,
  pwa: {
    name: 'Aura Main',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}