const genericCrudController = require('../controllers/genericCRUDController');

exports.createCrud = (Model, modelName) => ({
  getAll: genericCrudController.getAll(Model),
  getOne: genericCrudController.getOne(Model),
  add: genericCrudController.add(Model, modelName),
  patch: genericCrudController.patch(Model, modelName),
  delete: genericCrudController.delete(Model, modelName),
});
