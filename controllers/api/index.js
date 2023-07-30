const router = require('express').Router();
const usePost = require('./post-route');
const useUser = require('./user-route');

// const useApi = require('./api');

router.use('/post', usePost);
router.use('/user', useUser);


module.exports = router;