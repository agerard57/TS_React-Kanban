// index.js that uses generates sqlite3 database and uses sequelize to connect to it\

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite:./db/database.sqlite');

const User = sequelize.define('user', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
});

sequelize.sync().then(() => {
    User.create({
        name: 'John',
        email: 'test@test.com',	
        password : 'test'
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello MNS');
});

app.listen(3002, () => {
    console.log('App listening on port 3002!');
});

