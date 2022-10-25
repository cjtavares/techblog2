const Posts = require('./post');
const Users = require('./user');
const Comments = require('./comment');

Users.hasMany(Comments, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {
    foreignKey: "user_id" 
});

Users.hasMany(Posts, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
    foreignKey: "user_id" 
});

module.exports = { Posts, Users, Comments };