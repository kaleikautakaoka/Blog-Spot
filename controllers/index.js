const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-route.js');
const user = require('./user-route.js');
const post = require('./post-route.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/user', user);
router.use('/post', post);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
