const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');
const userModel = require('./user.model');

const cardModel = sequelize.define(
  'card',
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
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    edited_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);

cardModel.belongsTo(userModel, {
  foreignKey: 'author_id',
  as: 'author',
});

cardModel.belongsTo(userModel, {
  foreignKey: 'edited_by_id',
  as: 'edited_by',
});

module.exports = cardModel;
