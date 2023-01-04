const ListModel = require('../models/list.model');
const crudFactory = require('../factory/CrudFactory');

module.exports = crudFactory.createCrud(ListModel, 'list');
