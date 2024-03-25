const bcrypt = require('bcrypt');

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function verifyPassword(password, hashedPassword) {
  const verified = bcrypt.compareSync(password, hashedPassword);
  if (verified) return true;
  throw new Error('Password is incorrect');
}
