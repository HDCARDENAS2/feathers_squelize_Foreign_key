/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {

    const app                   = this.options.app
    const core_url              = app.service('core-url').Model
    const core_function         = app.service('core-function').Model

   await core_function.findOne({
      where: { core_function_id : 1 
      },
      include: [ core_url ]
    
    }).then(data => {
     
      console.log(JSON.stringify(data))

    })

    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
