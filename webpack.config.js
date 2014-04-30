var webpack = require('webpack');

module.exports = {
  context: __dirname + '/public',
  entry: './main.jsx',
  cache: true,
  watch: true,
  console: true,
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader!' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
    }
  }
};
