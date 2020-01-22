const path = require('path')
const dotenv = require('dotenv')
const webpack = require('webpack')

// Load .env values
const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader' }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve('dist'),
    port: 8080,
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true, // https://stackoverflow.com/a/36623117
  },
  plugins: [new webpack.DefinePlugin(envKeys)],
};