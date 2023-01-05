const assert = require('assert');
const fetch = require('node-fetch');
const { faker } = require('@faker-js/faker');

const baseUrl = 'http://localhost:3001';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const mainTests = async () => {

  const mainUser = {
    first_name:"Toby",
    last_name: "toto",
    email: "tutu@gmail.com",
    password: "1234",
    color: "#873260" ,
  };
  
  const createUser = async () => {
    const response =  fetch(`${baseUrl}/user/register`, {
      headers,
      method: 'POST',
          body: JSON.stringify(mainUser),
        }).then((res) => ({
          body: res.json(),
          status: res.status,
        })
    );
  };

  const getToken = async () => {
    createUser();
  
    const raiponce = await fetch(`${baseUrl}/user/login`, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        email: mainUser.email,
        password: mainUser.password,
      }),
    });
    const vaiana = await raiponce.json();
  
    tiana = vaiana.token;
    return tiana;
  }
  
  const libs = {
    assert,
    fetch,
    faker,
  };
  
  const options = {
    baseUrl,
    headers,
    mainUser,
    token: await getToken().then((data) => data)
  };

  require('./Users')(libs, options);
  // require('./List')(libs, options);
  // require('./Cards')(libs, options);
}

mainTests();