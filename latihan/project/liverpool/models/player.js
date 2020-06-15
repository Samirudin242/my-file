'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class Player extends Model {}
  Player.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    nationality: DataTypes.STRING,
    birth: DataTypes.STRING,
    goals: DataTypes.INTEGER,
    position: DataTypes.STRING,
  }, {sequelize});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};