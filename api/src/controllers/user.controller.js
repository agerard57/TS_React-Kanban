const UserModel = require('../models/user.model');
const genericCRUDController = require('./genericCRUDController');
const userServices = require('../services/userService');
const bcrypt = require('bcryptjs');

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
          userServices.loginUser(req.body.email, req.body.password).then((token) => {
            res.status(200).json({
                token,
                message: 'User registered!',
                data : user
            });
          }
        ).catch((error) => {
            res.status(500).json({
                message: "an error occured",
                error
            });
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: error,
        });
      });
};

exports.getAll = genericCRUDController.getAll(UserModel);