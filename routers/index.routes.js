const { AuthRouters } = require('./auth.routes');
const { Router } = require('express');
const router = Router();

router.use('/auth', AuthRouters);

module.exports = {
  allRoutes: router,
};
