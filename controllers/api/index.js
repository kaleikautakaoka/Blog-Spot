const router = require('express').Router();
const usePost = require('./post-route.js');
const useUser = require('./user-route.js');
const useHome = require('./home-route.js');
const useApi = require('./api');

router.use('/post', usePost);
router.use('/user', useUser);
router.use('/', useHome);
router.use('/api', useApi);

router.use((req, res) => {
    res.status(404).end();
}
);

module.exports = router;