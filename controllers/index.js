const router = require('express').Router();


//const all api routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

//router.use('/api', apiroutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

//module.exports = router;
module.exports = router;
