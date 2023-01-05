const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');

module.exports = sequelize.define(
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
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    edited_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    list_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {}
);
