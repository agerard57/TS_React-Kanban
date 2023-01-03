const bcrypt = require('bcryptjs');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');

module.exports = sequelize.define(
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
