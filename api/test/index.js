const assert = require('assert');
const fetch = require('node-fetch');
const { faker } = require('@faker-js/faker');
const fs = require('fs');

const baseUrl = 'http://localhost:3001';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const mainTests = () => {

  const token = fs.readFileSync('./test/cookie/cookie.txt', {encoding:'utf8', flag:'r'}, (err) => {
    if (err) throw err;
    console.log('complete');
  });
  
  const libs = {
    assert,
    fetch,
    faker,
  };
  
  const options = {
    baseUrl,
    headers,
    token
  };
  
  require('./Users')(libs, options);
  // require('./Lists')(libs, options);
  // require('./Cards')(libs, options);
};

mainTests();