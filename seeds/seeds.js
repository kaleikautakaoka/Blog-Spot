const sequelize = require('../config/connection');
const { User, Post, View } = require('../models');

const starterData = require('./data.json');
const userData = require('./user.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of starterData) {
        await Post.create({
            ...starter,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
}


