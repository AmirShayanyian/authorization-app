const AuthController = require('../controllers/auth.controller');
const authController = new AuthController();
const { Router } = require('express');
const router = Router();

router.post('/signup', authController.signUp);

module.exports = {
  AuthRouters: router,
};
