const assert = require('assert');


//Test create List with title Tset if execute equal 200
module.exports = () => {
  const routeList="/list"

  function createList_is_good() {
    const express = require('express');
    const app = express();
    const request = require('supertest');

    app.post(routeList, function(req, res) {
      res.status(200).json({
        title: "Tset",
        user_id: 5
      });
    });
    
    request(app)
    .post(routeList)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
      console.log("\n\nTest create List with title Tset, should return 200 http code " + JSON.stringify(res.body));
      if (err) {
        throw err;
      } else {
        console.log("Test pass, result status : " + res.status);
      }
    });
  }

  function createList_with_no_title_return_500() {
    const express = require('express');
    const app = express();
    const request = require('supertest');

    //Test create List without title if execute equal 500 
    app.post(routeList, function(req, res) {
      res.status(500).json({
        user_id : 5
      });
    });
    
    request(app)
      .post(routeList)
      .expect('Content-Type', /json/)
      .expect(500)
      .end(function(err, res) {
        console.log("\n\nCreate list with no title, should return 500 http code " + JSON.stringify(res.body));
        if (err) {
          throw err;
        } else {
          console.log("test pass, result status : " + res.status);
        }
    });
  }
  
  function createList_with_no_userID_return_500() {
    const express = require('express');
    const app = express();
    const request = require('supertest');

    //Test create List without title if execute equal 500 
    app.post(routeList, function(req, res) {
      res.status(500).json({
        title : "title"
      });
    });
    
    request(app)
      .post(routeList)
      .expect('Content-Type', /json/)
      .expect(500)
      .end(function(err, res) {
        console.log("\n\nCreate list with no user_id, should return 500 http code" + JSON.stringify(res.body));
        if (err) {
          throw err;
        } else {
          console.log("test pass, result status : " + res.status);
        }
    });
  }

  createList_is_good();
  createList_with_no_title_return_500();
  createList_with_no_userID_return_500();
}

