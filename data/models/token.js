'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      })
    }
  };
  Token.init({
    token: {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4
    },
    token_exp: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};