const assert = require('assert');
const app = require('../../src/app');

describe('\'core_url\' service', () => {
  it('registered the service', () => {
    const service = app.service('core-url');

    assert.ok(service, 'Registered the service');
  });
});
