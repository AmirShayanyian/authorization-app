const userModel = require('../models/user.model');
class AuthController {
  async signUp(req, res, next) {
    try {
      const { username, firstName, lastName, email, Address, password } =
        req.body;
      const user = await userModel.create({
        username,
        firstName,
        lastName,
        email,
        Address,
        password,
      });
      res.send({
        status: 200,
        message: 'user registered successfully',
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = AuthController;
