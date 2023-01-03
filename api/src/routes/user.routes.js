const userController = require('../controllers/user.controller');

module.exports = (app) => {
  // POST user login
  /*   app.route("/user/login").post(userController.login); */

  // GET all users
  app.route('/users').get(userController.getAll);

  // POST new user
  /*  app.route("/test").post(userController.add); */

  /*   app.route("/user").post(userController.add); */

  // GET user by id
  /*   app.route("/user/:id([0-9a-f]{24})").get(userController.getOne); */
};
