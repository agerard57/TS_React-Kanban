const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

module.exports = (app) => {
  
  app.route("/user/login").post(userController.login);
  app.route("/user/register").post(userController.register);
  app.route("/users").get([authMiddleware.checkTokenMiddleware],userController.getAll);
  app.route("/user/:id([0-9]*)")
    .get([authMiddleware.checkTokenMiddleware],userController.getOne)
    .delete([authMiddleware.checkTokenMiddleware],userController.delete)
    .patch([authMiddleware.checkTokenMiddleware],userController.patch);

};
