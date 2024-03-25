const { AuthRouters } = require('./auth.routes');
const { Router } = require('express');
const { ProfileRoutes } = require('./profile.routes');
const { checkAuth } = require('../middlewares/check-auth');
const router = Router();

router.use('/auth', AuthRouters);
router.use('/user', checkAuth, ProfileRoutes);

module.exports = {
  allRoutes: router,
};
