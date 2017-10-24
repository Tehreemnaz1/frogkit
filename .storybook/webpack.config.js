const path = require('path');
//
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.styl$/,
//         loaders: ["style-loader", "css-loader", "stylus-loader"],
//         include: path.resolve(__dirname, '../src')
//       }
//     ]
//   }
// }
//


// load the default config generator.
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  // For example, add typescript loader:
  config.module.rules.push({
    test: /\.styl$/,
    loaders: ["style-loader", "css-loader", "stylus-loader"],
    include: path.resolve(__dirname, '../src')
  })

  return config
};
