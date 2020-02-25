module.exports = {
  pwa: {
    name: "MITRE SAF",
    workboxPluginMode: "InjectManifest",
    themeColor: "#4A90E2",
    workboxOptions: {
      swSrc: "./src/sw.js",
      swDest: "service-worker.js"
    }
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mitre-saf/'
    : '/'
};
