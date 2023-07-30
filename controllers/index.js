const router = require('express').Router();


//const all api routes
const apiRoutes = require('./api');

//router.use('/api', apiroutes);
router.use('/api', apiRoutes);

//module.exports = router;
module.exports = router;
