'use strict';
/**
 * Created by xiashan
 * 全局应用对象，应用启动时被创建
 * Date: 2018/6/20 下午3:33
 */
const webpack = require('webpack');
const koa = require('koa');
const app = new koa();

module.exports = agent => {
  const config = agent.config.webpack;
  const webpackConfig = config.webpackConfigList;
  const compiler = webpack([ webpackConfig ]);

  const devMiddleware = require('koa-webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      children: true,
      modules: false,
      chunks: false,
      chunkModules: false,
    },
    watchOptions: {
      ignored: /node_modules/,
    },
  });

  const hotMiddleware = require('koa-webpack-hot-middleware')(compiler, {
    log: false,
    reload: true,
  });

  app.use(devMiddleware);
  app.use(hotMiddleware);

  app.listen(config.port, err => {
    if (!err) {
      agent.logger.info(`start webpack client build service: http://127.0.0.1:${config.port}`);
    }
  });
};
