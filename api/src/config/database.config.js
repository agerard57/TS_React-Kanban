const Sequelize = require("sequelize");

const sequelize = new Sequelize("sqlite:../db/database.sqlite", {
  define: {
    timestamps: false,
  },
});

const User = sequelize.define("user", {
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

sequelize.sync().then(() => {
  User.create({
    name: "John",
    email: "test@test.com",
    password: "test",
  });
});

module.exports = sequelize;
