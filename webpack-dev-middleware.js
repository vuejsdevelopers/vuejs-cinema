const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

module.exports = {
  init(app) {
    app.use(webpackDevMiddleware(compiler, {
      hot: true,
      stats: {
        colors: true
      },
      historyApiFallback: true,
      publicPath: webpackConfig.output.publicPath,
      filename: webpackConfig.output.filename,
    }));

    app.use(require("webpack-hot-middleware")(compiler, {
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }));
  }
};
