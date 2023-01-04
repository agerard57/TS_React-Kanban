const UserModel = require('../models/user.model');
const genericCRUDController = require('./genericCRUDController');
const userServices = require('../services/userService');

exports.getAll = genericCRUDController.getAll(UserModel);
exports.getOne = genericCRUDController.getOne(UserModel);
exports.patch = genericCRUDController.patch(UserModel, 'user');
exports.delete = genericCRUDController.delete(UserModel, 'user');

exports.register = async (req, res) => {
  const userExists = await userServices.userExists(req.body.email);
  if (userExists) {
    res.status(409).json({
      message: 'User already exists!',
    });
    return;
  }

  const user = new UserModel({
    ...req.body,
  });
  user
    .save()
    .then(() => {
      userServices
        .loginUser(req.body.email, req.body.password)
        .then((response) => {
          res.status(200).json({
            token: response.token,
            message: 'User registered!',
            data: user,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: 'an error occurred',
            error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.login = (req, res) => {
  userServices
    .loginUser(req.body.email, req.body.password)
    .then((response) => {
      res.status(200).json({
        token: response.token,
        data: response.user,
        message: 'User logged in!',
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'an error occured',
        error,
      });
    });
};


