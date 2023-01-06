const ListModel = require('../models/list.model');
const CardModel = require('../models/card.model');
const UserModel = require('../models/user.model');
const crudFactory = require('../factory/CrudFactory');

module.exports = crudFactory.createCrud(ListModel, 'list');

module.exports.getAllWithDetails = (req, res) => {
  ListModel.findAll({
    include: [
      {
        model: CardModel,
        as: 'card',
        include: [
          {
            model: UserModel,
            as: 'author',
          },
          {
            model: UserModel,
            as: 'edited_by',
          },
        ],
      },
      {
        model: UserModel,
        as: 'user',
      },
    ],
  })
    .then((object) => {
      res.json(object);
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Error retrieving list with details',
        error,
      });
    });
};
