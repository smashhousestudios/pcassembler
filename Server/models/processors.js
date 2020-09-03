'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Processors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Processors.init({
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    chipset: DataTypes.STRING,
    clockrate: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Processors',
  });
  return Processors;
};