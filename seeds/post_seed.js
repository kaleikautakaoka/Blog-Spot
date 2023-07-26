const { Post } = require('../models');


const postData = [
    {
        title: 'The first voice',
        content: 'I like sandwiches',
        user_id: 1
    },
    {
        title: 'Cats',
        content: 'I like cats',
        user_id: 2
    },
    {
        title: 'I need a job',
        content: 'Who is hiring?',
        user_id: 3
    },
    {
        title: 'Did you see that?',
        content: 'Today at the store a dog was wearing a hat!',
        user_id: 4
    },
    {
        title: 'Wheres your head at?',
        content: 'Who wrote that song?',
        user_id: 5
    },
    {
        title: 'Does anyone know where I can get a good sandwich?',
        content: 'Denver.',
        user_id: 6
    },

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;