const User = require('./user');
const Post = require('./post');
const View = require('./view');


//Adding associations for the user and post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//belongs to user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//belongs to post
View.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

//belongs to user
View.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//belongs to someone else's post
Post.hasMany(View, {
    foreignKey: 'post_id'
});

//belongs to someone else's user
User.hasMany(View, {
    foreignKey: 'user_id'
});

module.exports = { User, Post, View };