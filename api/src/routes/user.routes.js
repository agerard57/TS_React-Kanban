const userController = require('../controllers/user.controller');

module.exports = (app) => {
  
  //app.route("/user/login").post(userController.login);
  app.route("/user/register").post(userController.register);
  app.route("/users").get(userController.getAll);

};
