const listController = require('../controllers/list.controller');

module.exports = (app) => {
  app.route('/lists').get(listController.getAll);

  app.route("/list/:id([0-9]*)")
    .get(listController.getOne)
    .delete(listController.delete)
    .patch(listController.patch);
    
  app.route('/list')
    .post(listController.add)

};
