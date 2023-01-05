// Test create List with title Test if execute equal 200
module.exports = () => {
  const routeList = '/list';

  const createListIsGood = () => {
    const express = require('express');
    const app = express();
    const request = require('supertest');

    app.post(routeList, (req, res) => {
      res.status(200).json({
        title: 'Test',
        user_id: 5,
      });
    });

    request(app)
      .post(routeList)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        console.log(
          `\n\nTest create List with title Test, should return 200 http code ${JSON.stringify(
            res.body
          )}`
        );
        if (err) {
          throw err;
        } else {
          console.log(`Test pass, result status : ${res.status}`);
        }
      });
  };

  const createListWithNoTitleReturn500 = () => {
    const express = require('express');
    const app = express();
    const request = require('supertest');

    // Test create List without title if execute equal 500
    app.post(routeList, (req, res) => {
      res.status(500).json({
        user_id: 5,
      });
    });

    request(app)
      .post(routeList)
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err, res) => {
        console.log(
          `\n\nCreate list with no title, should return 500 http code ${JSON.stringify(
            res.body
          )}`
        );
        if (err) {
          throw err;
        } else {
          console.log(`test pass, result status : ${res.status}`);
        }
      });
  };

  const createListWithNoUserIDReturn500 = () => {
    const express = require('express');
    const app = express();
    const request = require('supertest');

    // Test create List without title if execute equal 500
    app.post(routeList, (req, res) => {
      res.status(500).json({
        title: 'title',
      });
    });

    request(app)
      .post(routeList)
      .expect('Content-Type', /json/)
      .expect(500)
      .end((err, res) => {
        console.log(
          `\n\nCreate list with no user_id, should return 500 http code${JSON.stringify(
            res.body
          )}`
        );
        if (err) {
          throw err;
        } else {
          console.log(`test pass, result status : ${res.status}`);
        }
      });
  };

  createListIsGood();
  createListWithNoTitleReturn500();
  createListWithNoUserIDReturn500();
};
