// Initializes the `core_url` service on path `/core-url`
const createService = require('feathers-sequelize');
const createModel = require('../../models/core-url.model');
const hooks = require('./core-url.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'core-url',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/core-url', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('core-url');

  service.hooks(hooks);
};
