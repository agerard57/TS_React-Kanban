const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite:../db/database.sqlite', {
  define: {
    timestamps: false,
  },
});

if (process.env.LOAD_FIXTURES) {
  sequelize
    .sync({ force: true })
    .then(() => {
      const User = require('../models/user.model');
      const Card = require('../models/card.model');
      const List = require('../models/list.model');

      const users = [];
      const lists = [];

      // create 5 users

      for (let i = 0; i < 3; i++) {
        const user = User.create({
          firstname: `User${i}`,
          surname: `Surname${i}`,
          color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          email: `user${i}@gmail.com`,
          password: '123456',
        }).then((user) => {
          users.push(user);
          // create 1 list for each user
          List.create({
            title: `List${i}`,
            user_id: user.id,
          }).then((list) => {
            lists.push(list);
            // create 5 cards for each list
            for (let j = 0; j < 4; j++) {
              Card.create({
                title: `Card${j}`,
                description: `Description${j}`,
                author_id: users[Math.floor(Math.random() * users.length)].id,
                edited_by_id: user.id,
                list_id: list.id,
              });
            }
          });
        });
      }
    })
  }

sequelize.sync();

module.exports = sequelize;
