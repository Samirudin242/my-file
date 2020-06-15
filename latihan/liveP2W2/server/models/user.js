'use strict';
const {encrypt} = require('../helper/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize
  const Model = Sequelize.Model
  class User extends Model {}
  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          arg: true,
          msg: `Name can't be empty`
        }, 
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          arg: true,
          msg: `User name can't be empty`
        }, 
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          arg: true,
          msg: `email can't be empty`
        }, 
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          arg: true,
          msg: `Password can't be empty`
        }, 
      }
    },
  }, {sequelize,
      hooks : {
        beforeCreate: (user) => {
          user.password = encrypt(user.password)
        }
      }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};