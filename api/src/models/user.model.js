const bcrypt = require("bcryptjs");
const sequelize = require("../config/database.config");
const { DataTypes } = require("sequelize");

module.exports = sequelize.define(
  "user",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // We require usernames to have length of at least 3, and
        // only use letters, numbers and underscores.
        is: /^\w{3,}$/,
      },
    },
    email: {
      type: DataTypes.STRING,
      set(email) {
        this.setDataValue("email", email.toLowerCase());
      },
    },
    password: {
      type: DataTypes.STRING,
      set(password) {
        this.setDataValue("password", bcrypt.hashSync(password, 10));
      },
    },
  },
  {}
);
