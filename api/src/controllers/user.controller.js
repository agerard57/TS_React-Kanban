const UserModel = require('../models/user.model');

/* const generatePictureProfileNumber = () => {
  const max = 5;
  const min = 0;

  return Math.floor(Math.random() * (max - min) + min);
}; */

// //////////////////
// Get all controller sequelize model
exports.getAll = (req, res) => {
  UserModel.findAll()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

// //////////////////
// Get one controller
/* exports.getOne = (req, res) => {
   const id = req.params.id;

  UserModel.findById(id)
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
}; */

// //////////////////
// Add controller
/* exports.add = (req, res) => {
  const user = new UserModel(UserOptions(req.body));
  user.profilePicNumber = generatePictureProfileNumber();

  user
    .save()
    .then((_message) => {
      res.status(200).json("Your user has been added!");
    })
    .catch((_error) => {
      res.status(500).json("An error occurred!");
    });
}; */

// ////////////////
// Login controller
/* exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  UserModel.findOne({ email: email }).then((user) => {
    if (user.password == password) {
      res.status(200);
      res.send({
        data: {
          user: {
            id: user._id,
            name: {
              firstName: user.name.firstName,
              lastName: user.name.lastName,
            },
            profilePicNumber: user.profilePicNumber,
          },
        },
      });
    } else {
      res.status(401).send();
    }
  });
}; */
