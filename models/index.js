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
View.belongsTo(User, {
    foreignKey: 'user_id',
});

View.belongsTo(Post, {
    foreignKey: 'post_id',
});

User.hasMany(View, {
    foreignKey: 'user_id',
});

Post.hasMany(View, {
    foreignKey: 'post_id',
});


module.exports = { User, Post, View };