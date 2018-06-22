'use strict';

const mock = require('egg-mock');

describe('test/webpack-simple.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/webpack-simple-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, webpackSimple')
      .expect(200);
  });
});
