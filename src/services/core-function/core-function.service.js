// Initializes the `core_function` service on path `/core-function`
const createService = require('feathers-sequelize');
const createModel = require('../../models/core-function.model');
const hooks = require('./core-function.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'core-function',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/core-function', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('core-function');

  service.hooks(hooks);
};
