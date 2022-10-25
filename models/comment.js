const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comments extends Model {}

Comments.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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
        },
        post_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'posts',
                key: 'id',
              },
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: true,
        modelName: 'comments', 
      }
);

module.exports = Comments;