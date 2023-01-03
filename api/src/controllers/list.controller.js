const genericCrudController = require('./genericCRUDController');
const ListModel = require('../models/list.model');

exports.getAll = genericCrudController.getAll(ListModel);
exports.getOne = genericCrudController.getOne(ListModel);
exports.add = genericCrudController.add(ListModel, 'list');
exports.patch = genericCrudController.patch(ListModel, 'list');
exports.delete = genericCrudController.delete(ListModel, 'list');
