const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
// const dotenv = require('dotenv');

console.log('webpack.dev.js dirname', __dirname);
const envDev = path.join(__dirname, '../.env.development');
const env = require('dotenv').config({ path: envDev }).parsed;

const common = require('./webpack.common');

const envKeys = Object.keys(env).reduce((acc, value) => {
  acc[`process.env.${value}`] = JSON.stringify(env[value]);
  return acc;
}, {});

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // BASE_URL: process.env.API_URL,
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
    port: 8080,
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ],
});
