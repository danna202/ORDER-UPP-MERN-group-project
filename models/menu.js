'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Menu.init({
    food_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    order_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    food_name:{
        type: DataTypes.STRING,
        allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Menu',
    tableName: 'menu',
    timestamps: false
  });
  return Menu;
};