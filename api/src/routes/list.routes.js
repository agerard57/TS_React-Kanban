const listController = require('../controllers/list.controller');
const authMiddleware = require('../middleware/auth.middleware');

module.exports = (app) => {
  app.route('/lists/details').get(listController.getAllWithDetails);

  app
    .route('/lists')
    .get([authMiddleware.checkTokenMiddleware], listController.getAll);

  app
    .route('/list/:id([0-9]*)')
    .get([authMiddleware.checkTokenMiddleware], listController.getOne)
    .delete([authMiddleware.checkTokenMiddleware], listController.delete)
    .patch([authMiddleware.checkTokenMiddleware], listController.patch);

  app
    .route('/list')
    .post([authMiddleware.checkTokenMiddleware], listController.add);
};
