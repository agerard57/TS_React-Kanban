const assert = require('assert');
const fetch = require('node-fetch');
const { faker } = require('@faker-js/faker');

const baseUrl = 'http://localhost:3001';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const libs = {
  assert,
  fetch,
  faker,
};

const options = {
  baseUrl,
  headers,
};

require('./Users')(libs, options);
