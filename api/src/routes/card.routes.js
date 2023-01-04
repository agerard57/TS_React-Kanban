const cardController = require('../controllers/card.controller');
const authMiddleware = require('../middleware/auth.middleware');

module.exports = (app) => {
  app
    .route('/cards')
    .get([authMiddleware.checkTokenMiddleware], cardController.getAll);

  app
    .route('/card/:id([0-9]*)')
    .get([authMiddleware.checkTokenMiddleware], cardController.getOne)
    .delete([authMiddleware.checkTokenMiddleware], cardController.delete)
    .patch([authMiddleware.checkTokenMiddleware], cardController.patch);

  app
    .route('/card')
    .post([authMiddleware.checkTokenMiddleware], cardController.add);
};
