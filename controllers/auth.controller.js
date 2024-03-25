const userModel = require('../models/user.model');
const { hashPass, verifyPass } = require('../utils/auth.util');
class AuthController {
  async signUp(req, res, next) {
    try {
      const { username, firstName, lastName, email, Address, password } =
        req.body;
      const hashedPass = hashPass(password);
      const user = await userModel.create({
        username,
        firstName,
        lastName,
        email,
        Address,
        password: hashedPass,
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
      console.log(user);

      const verify = verifyPass(password, user.password);
      if (verify) {
        return res.send({
          status: 200,
          type: 'OK',
          data: `Some token for ${user.username}`,
        });
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = AuthController;
