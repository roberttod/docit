var webpack = require('webpack');

module.exports = {
  context: __dirname + '/public',
  entry: './main.jsx',
  cache: true,
  module: {
    loaders: [
      { test: /\.png/, loader: "url-loader?limit=100000&mimetype=image/png" },
      { test: /\.(eot|woff|ttf|svg)/, loader: "url-loader?limit=100000" },
      { test: /\.css$/, loader: 'style-loader!css-loader!' },
      { 
        test: /\.styl$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'
      },
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma&harmony' }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
    alias: {
    }
  }
};
