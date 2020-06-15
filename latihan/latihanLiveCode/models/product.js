'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class Product extends Model {}
 Product.init({
    name: DataTypes.STRING,
    sku: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    is_discontinued: DataTypes.BOOLEAN
  }, {sequelize});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Category)
  };
  return Product;
};