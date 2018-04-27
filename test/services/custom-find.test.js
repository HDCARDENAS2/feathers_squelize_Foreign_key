const assert = require('assert');
const app = require('../../src/app');

describe('\'Custom-find\' service', () => {
  it('registered the service', () => {
    const service = app.service('custom-find');

    assert.ok(service, 'Registered the service');
  });
});
