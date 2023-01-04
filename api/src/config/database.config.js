const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite:../db/database.sqlite', {
  define: {
    timestamps: false,
  },
});

sequelize.sync();

module.exports = sequelize;
