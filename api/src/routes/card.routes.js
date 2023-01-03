const cardController = require('../controllers/card.controller');

module.exports = (app) => {
  app.route('/cards').get(cardController.getAll);

  app.route('/card/:id([0-9]*)')
    .get(cardController.getOne)
    .delete(cardController.delete)
    .patch(cardController.patch);

  app.route('/card').post(cardController.add);

};
