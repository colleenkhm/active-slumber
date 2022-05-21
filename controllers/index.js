const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const createSleepRoutes = require('./createSleep-Routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/create-sleep', createSleepRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;