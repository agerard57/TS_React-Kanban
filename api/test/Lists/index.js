const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
const routeList="/list"

app.post(routeList, function(req, res) {
  res.status(200).json({
    title: "Tset",
    user_id : 5
  });
});

request(app)
  .post(routeList)
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
    console.log(res.body)
});

// test('Test create List with title Tset if execute equal 200 ', () => {
//   const result = fetch(routeList,{
//     method:"post",
//     body:{
//       "title" : "Tset",
//       "user_id" : 5
//     },

//   });
//   const resJson=result.json();
//   expect(resJson.status).toBe(200);
// });

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
