const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
let stringConfig = 'dev';
process.argv.forEach((val, index) => {
  if(val ==="-p" || val === "--production") {
    stringConfig = 'prod';
  }
});
const config = require(`./webpack.${stringConfig}.js`);
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));

// Serve the files on port 3000.
app.listen(5000, function () {
    console.log('Example app listening on port 5000!\n');
});