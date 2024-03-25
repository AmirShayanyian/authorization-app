const ProfileController = require('../controllers/profile.controller');
const profileController = new ProfileController();
const { Router } = require('express');
const router = Router();

router.get('/profile', profileController.profile);

module.exports = {
  ProfileRoutes: router,
};
