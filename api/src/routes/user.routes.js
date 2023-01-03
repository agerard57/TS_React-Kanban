const userController = require('../controllers/user.controller');

module.exports = (app) => {
  
  app.route("/user/login").post(userController.login);
  app.route("/user/register").post(userController.register);
  app.route("/users").get(userController.getAll);
  app.route("/user/:id([0-9]*)")
    .get(userController.getOne)
    .delete(userController.delete)
    .patch(userController.patch);

};
