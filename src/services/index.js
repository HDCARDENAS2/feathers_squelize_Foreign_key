const coreUrl = require('./core-url/core-url.service.js');
const coreFunction = require('./core-function/core-function.service.js');
const customFind = require('./custom-find/custom-find.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(coreUrl);
  app.configure(coreFunction);
  app.configure(customFind);
};
