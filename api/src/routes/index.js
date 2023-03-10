const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const routes = (app) => {
  // /////////////////////////
  // Middleware instantiated
  app.use(cors());
  app.use(morgan('tiny'));
  app.use(express.json({ extended: true }));

  // ///////
  // Routes
  require('./user.routes')(app);
  require('./list.routes')(app);
  require('./card.routes')(app);
};

module.exports = routes;
