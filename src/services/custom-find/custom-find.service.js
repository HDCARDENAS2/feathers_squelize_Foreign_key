// Initializes the `Custom-find` service on path `/custom-find`
const createService = require('./custom-find.class.js');
const hooks = require('./custom-find.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    name: 'custom-find',
    app: app,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/custom-find', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('custom-find');

  service.hooks(hooks);
};
