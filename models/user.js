const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Users extends Model {}

Users.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username:{
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,  
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            },
          },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'users', 
      }
);

module.exports = Users;