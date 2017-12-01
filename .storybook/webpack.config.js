const path = require('path')
const merge = require('webpack-merge')
const srcPath = path.resolve(__dirname, '../src')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const customConfig = {
  module: {
    rules: [
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader?resolve url',
        include: srcPath
      },
      // {
      //   test: /\.svg$/,
      //   loader: require.resolve('file-loader'),
      //   include: srcPath
      // }
    ]
  },
  resolve: {
    extensions: [ '.vue' ],
    alias: {
      '@': resolve('src')
    }
  }
}


// load the default config generator.
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const defaultConfig = genDefaultConfig(baseConfig, env);
  const config = merge(defaultConfig, customConfig)
  console.log('used rules')
  console.log(config.module.rules)

  console.log('resolve')
  console.log(config.resolve)
  return config
}
