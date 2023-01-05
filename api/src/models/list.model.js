const { DataTypes } = require('sequelize');
const cardModel = require('./card.model');
const userModel = require('./user.model');

const sequelize = require('../config/database.config');

const ListModel = sequelize.define(
  'list',
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // Title must be have minimum length of 1 any caracter allowed
        is: /^.{1,}$/,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

// make relation with card model
ListModel.hasMany(cardModel, {
  foreignKey: 'list_id',
  as: 'card',
});

// make relation with user model
ListModel.belongsTo(userModel, {
  foreignKey: 'user_id',
  as: 'user',
});

module.exports = ListModel;