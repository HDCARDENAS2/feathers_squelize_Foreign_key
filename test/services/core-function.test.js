const assert = require('assert');
const app = require('../../src/app');

describe('\'core_function\' service', () => {
  it('registered the service', () => {
    const service = app.service('core-function');

    assert.ok(service, 'Registered the service');
  });
});
