// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const coreFunction = sequelizeClient.define('core_function', {
    
    core_function_id: {
      fields: ['id'],
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    core_url_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_at: {
      fields: ['created_at'],
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      fields: ['updated_at'],
      type: Sequelize.DATE,
      allowNull: true,
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
  coreFunction.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    coreFunction.belongsTo(models.core_url, { foreignKey: 'core_url_id' })
    coreFunction.addScope('defaultScope', {  include: [models.core_url] }, { override: true })

  };

  return coreFunction;
};
