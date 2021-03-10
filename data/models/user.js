'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.TipoUser, {
        foreignKey: 'tipoUserId',
        as: 'tipoUser'
      })
    }
  };
  User.init({
    email: {
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
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser vazio'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Este campo não pode ser vazio'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};