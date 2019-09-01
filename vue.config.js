module.exports = {
  proxy: 'https://api.meetup.com/',
  pwa: {
    name: "GDG Galway",
    workboxPluginMode: "InjectManifest",
    themeColor: "#4A90E2",
    workboxOptions: {
      swSrc: "./src/sw.js",
      swDest: "service-worker.js"
    }
  }
};
