const userModel = require('../models/user.model');
const { hashPass, verifyPass, signToken } = require('../utils/auth.util');
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
        password: hashPass(password),
      });
      res.send({
        status: 200,
        message: 'user registered successfully',
        data: {
          user,
        },
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.send({
          status: 400,
          type: 'Bad Request',
          message: 'duplicate username! try changing it ',
        });
      }
      next(error);
    }
  }

  async signIn(req, res, next) {
    try {
      const { username, password } = req.body;

      const user = await userModel.findOne({ username });

      const verify = verifyPass(password, user.password);
      if (verify) {
        const token = signToken({ id: user._id, username: user.username });
        return res.send({
          status: 200,
          type: 'OK',
          data: {
            message: 'Logged in successfully',
            token,
          },
        });
      }
      return res.send({
        status: 404,
        type: 'Not Found',
        message: 'username or password is incorrect',
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = AuthController;
