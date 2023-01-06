const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const config = require('../config/auth.config');

exports.userExists = async (email) => {
  const user = await UserModel.findOne({ where: { email } });
  return user !== null;
};

exports.loginUser = async (email, password) => {
  const user = await UserModel.findOne({ where: { email } });
  if (!user) {
    console.log('User not found!');
    throw new Error('User not found!');
  }
  const passwordIsValid = await bcrypt.compare(password, user.password);

  if (!passwordIsValid) {
    console.log('Invalid password!');
    throw new Error('Invalid password!');
  }
  // generate token
  const token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 });

  return { token, user };
};
