const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = '55515185cf6806d7d9296d6597c1e72ade0f24c3';

function hashPass(password) {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function verifyPass(password, hashedPassword) {
  const verified = bcrypt.compareSync(password, hashedPassword);
  return verified;
}

function signToken(payload) {
  return jwt.sign(payload, secret, {
    expiresIn: 1000 * 60 * 15,
  });
}

function verifyToken(token) {
  return jwt.verify(token, secret);
}

module.exports = {
  hashPass,
  verifyPass,
  signToken,
  verifyToken,
};
