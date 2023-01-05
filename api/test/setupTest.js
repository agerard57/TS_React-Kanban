const fetch = require('node-fetch');

const baseUrl = 'http://localhost:3001';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const mainUser = {
  first_name:'Toby',
  last_name: 'toto',
  email: 'tutu@gmail.com',
  password: '1234',
  color: '#873260' ,
};


const setupTest = () => {
    
  const createUser = async () => {
    fetch(`${baseUrl}/user/register`, {
      headers,
      method: 'POST',
          body: JSON.stringify(mainUser),
        }).then((res) => ({
          body: res.json(),
          status: res.status,
        })
    );
  };

  const setTokenInFile = (data) => {
    const fs = require('fs');

    fs.writeFile('./test/cookie/cookie.txt', data, 'utf8', (err) => {
      if (err) throw err;
      console.log('complete');
      });
  };

  const getToken = async () => {
    createUser();
  
    const response = fetch(`${baseUrl}/user/login`, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        email: mainUser.email,
        password: mainUser.password,
      }),
    });

    const responseJSON = response.then((res) => res.json());

    responseJSON.then((data) => {
        // Add token into a file for use it for test
        setTokenInFile(data.token);
      })
      .catch((err) => {
        console.log(err);
      });
        
  };


  getToken();
};

setupTest();