const {User} = require('../models');



const userData = [
    {
        username: 'User1',
        password: 'theBestPassword',
        user_id: 1,
        email: "user1@gmail.com"
    },
    {
        username: 'Frank',
        password: 'frankie123',
        user_id: 2,
        email: "user2@gmail.com"
    },
    {
        username: 'bitmad',
        password: 'bitUnhappy',
        user_id: 3,
        email: "user3@gmail.com"
    },
    {   username: 'Gail',
        password: 'bitten2',
        user_id: 4,
        email: "user4@gmail.com"
    },
    {
        username: 'MrHat',
        password: 'Crazyhat',
        user_id: 5,
        email: "user5@gmail.com"
    },
    {
        username: 'Kyle',
        password: 'themile1',
        user_id: 6,
        email: "user6@gmail.com"
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

