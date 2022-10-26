const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const dashboard = require('./dashboard-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', dashboard);

module.exports = router;