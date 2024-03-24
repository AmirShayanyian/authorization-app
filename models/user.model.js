const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  Address: { type: String },
  password: { type: String },
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
