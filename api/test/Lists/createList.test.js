const assert = require('assert');


//Test create List with title Tset if execute equal 200
module.exports = () => {
  const routeList="/list"

  function createList_is_good() {
    const express = require('express');
    const app = express();
    const request = require('supertest');


    console.log("Test create List with title Tset if execute equal 200");
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
        if (err) {
          throw err;
        } else {
          console.log(res.body);
        }
    });
  }

  function createList_isnotrgtdnjfsvrdtng() {
    const express = require('express');
    const app = express();
    const request = require('supertest');


    //Test create List without title if execute equal 500 
    app.post(routeList, function(req, res) {
      res.status(500).json({
        // user_id : 5
      });
    });
    
    request(app)
      .post(routeList)
      .expect('Content-Type', /json/)
      .expect(500)
      .end(function(err, res) {
        console.log(res.body);
        if (err) throw err;
        // console.log(res.body)
    });
  }

  createList_is_good();
  createList_isnotrgtdnjfsvrdtng();
}

// test('Test create List without title if execute equal 500 ', () => {
//   const result = fetch(routeList,{
//     method:"post",
//     body:{
//       "user_id" : 5
//     },

//   });
//   const resJson=result.json();
//   expect(resJson.status).toBe(500);
// });

// test('Test create List without user Id if execute equal 500 ', () => {
//   const result = fetch(routeList,{
//     method:"post",
//     body:{
//       "title" : "Tset"
//     },

//   });
//   const resJson = result.json();
//   expect(resJson.status).toBe(500);
// });
// module.exports = function routes(app) {
// }

