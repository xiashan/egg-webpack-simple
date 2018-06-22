'use strict';

/**
 * egg-webpack-simple default config
 * @member Config#webpackSimple
 * @property {String} SOME_KEY - some description
 */
// exports.webpackSimple = {
//
// };
module.exports = {
  webpack: {
    port: 9000,
    webpackConfigList: [],
    proxy: {
      host: 'http://127.0.0.1:9000', // target host that matched path will be proxy to
      match: /^\/public\//, // path pattern.
    },
  },
};
