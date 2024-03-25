class ProfileController {
  async profile(req, res, next) {
    return res.send(req.user);
  }
}

module.exports = ProfileController;
