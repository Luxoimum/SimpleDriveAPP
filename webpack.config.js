let Encore = require('@symfony/webpack-encore')

Encore
  // the project directory where compiled assets will be stored
  .setOutputPath('public/js')
  // the public path used by the web server to access the previous directory
  .setPublicPath('/js')
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  // uncomment to create hashed filenames (e.g. app.abc123.css)
  // .enableVersioning(Encore.isProduction())
  .addEntry('app', './src/app.jsx')

  // React.js
  .enableReactPreset()

  .enableSingleRuntimeChunk()

module.exports = Encore.getWebpackConfig()
