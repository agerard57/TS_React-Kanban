const genericCrudController = require('./genericCRUDController');
const CardModel = require('../models/card.model');

exports.getAll = genericCrudController.getAll(CardModel);
exports.getOne = genericCrudController.getOne(CardModel);
exports.add = genericCrudController.add(CardModel, 'card');
exports.patch = genericCrudController.patch(CardModel, 'card');
exports.delete = genericCrudController.delete(CardModel, 'card');
