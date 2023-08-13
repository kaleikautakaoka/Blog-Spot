const router = require('express').Router();
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const viewRoutes = require('./viewRoutes');



router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/views', viewRoutes);



module.exports = router;