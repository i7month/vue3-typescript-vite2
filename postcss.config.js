module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
      ],
      grid: true,
    },
    'postcss-pxtorem': {
      rootValue: 37.5, // 换算的基数
      propList: ['*'],
      unitPrecision: 5
    }
  }
}
