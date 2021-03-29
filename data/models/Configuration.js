'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Configuration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
    }
  };
  Configuration.init({
    entitie_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser vazio'
        },
        isEmail: {
          msg: 'Este campo tem de ser um e-mail'
        }
      }
    },
    entitie_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser vazio'
        },
      }
    }
    
  }, {
    sequelize,
    modelName: 'Configuration',
  });
  return Configuration;
};