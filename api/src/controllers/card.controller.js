const CardModel = require('../models/card.model');
const crudFactory = require('../factory/CrudFactory');

module.exports = crudFactory.createCrud(CardModel, 'card');
