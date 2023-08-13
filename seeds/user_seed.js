const {User} = require('../models');



const userData = [
    {
        username: 'User1',
        password: 'theBestPassword',
        email: "user1@gmail.com"
    },
    {
        username: 'Frank',
        password: 'frankie123',
        email: "user2@gmail.com"
    },
    {
        username: 'bitmad',
        password: 'bitUnhappy',
        email: "user3@gmail.com"
    },
    {   username: 'Gail',
        password: 'bitten2',
        email: "user4@gmail.com"
    },
    {
        username: 'MrHat',
        password: 'Crazyhat',
        email: "user5@gmail.com"
    },
    {
        username: 'Kyle',
        password: 'themile1',
        email: "user6@gmail.com"
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

