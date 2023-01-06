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
      validate: {
        // Title must be have minimum length of 1 any character allowed
        is: /^[a-zA-Z0-9_ ]{1,}$/,
      },
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
