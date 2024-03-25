const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    Address: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
