const postcssPxtorem = require('postcss-pxtorem');

module.exports = {
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        plugins: [
          postcssPxtorem({
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
    },
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
};
