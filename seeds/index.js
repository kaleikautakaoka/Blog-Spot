const sequelize = require('../config/connection');
const { User, Post } = require('../models'); 

const userData = require('./userData.json');
const postData = require('./postData.json');
// const userSeed = require('./user_seed');
// const PostSeed = require('./post_seed');

const seedEverything = async () => {
    await sequelize.sync({ force: true }); 
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await Post.create({
            ...post,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
        }
    // console.log('\n----- DATABASE SYNCED -----\n');
    // await userSeed();
    // console.log('\n----- USERS SEEDED -----\n');
    // await PostSeed();
    // console.log('\n----- POSTS SEEDED -----\n');
    // process.exit(0);

    process.exit(0);

    };

seedEverything();


