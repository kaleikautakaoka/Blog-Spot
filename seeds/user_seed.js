const {User} = require('../models');



const userData = [
    {
        username: 'User1',
        password: 'theBestPassword',
        user_id: 1
    },
    {
        username: 'Frank',
        password: 'frankie123',
        user_id: 2
    },
    {
        username: 'bitmad',
        password: 'bitUnhappy',
        user_id: 3
    },
    {   username: 'Gail',
        password: 'bitten2',
        user_id: 4
    },
    {
        username: 'MrHat',
        password: 'Crazyhat',
        user_id: 5
    },
    {
        username: 'Kyle',
        password: 'themile1',
        user_id: 6
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

