const sequelize = require('../config/connection');
const userSeed = require('./user_seed');
const PostSeed = require('./post_seed');

const seedEverything = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await userSeed();
    console.log('\n----- USERS SEEDED -----\n');
    await PostSeed();
    console.log('\n----- POSTS SEEDED -----\n');
    process.exit(0);
    };

seedEverything();


