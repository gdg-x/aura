module.exports = {
    pwa: {
        name: 'Aura 2.0',
        workboxPluginMode: 'InjectManifest',
        themeColor: '#4A90E2',
        workboxOptions: {
        swSrc: './src/sw.js',
        swDest: 'service-worker.js',
        }
    },
    productionSourceMap: false,
}
