const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Posts extends Model {}

Posts.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        body:{
            type: DataTypes.TEXT,
            allowNull: false,  
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
              },
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        modelName: 'posts', 
      }
);

module.exports = Posts;