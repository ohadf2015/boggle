module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/boggle/'
    : '/',

  pluginOptions: {
    i18n: {
      locale: 'he',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
}
