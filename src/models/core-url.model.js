// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const coreUrl = sequelizeClient.define('core_url', {
    core_url_id: {
      fields: ['id'],
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      fields: ['created_at'],
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      fields: ['updated_at'],
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW
    }

  }, {
    timestamps  : false,
    underscored : false,
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  coreUrl.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/


  };

  return coreUrl;
};
