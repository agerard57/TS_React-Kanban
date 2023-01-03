const fetch = require('node-fetch');

const routeCard = "Https://localhost:3001/card"

test('Test create Card with title Tset if execute equal 200 ', () => {
  const result = fetch(routeCard,{
    method:"post",
    body:{
        "title" : "bonjour je suis le titre",
        "author_id" : 5,
        "edited_by_id" : 3
    }

  });
  const resJson = result.json();
  expect(resJson.status).toBe(200);
});

test('Test create Card without title if execute equal 500 ', () => {
  const result = fetch(routeCard,{
    method:"post",
    body:{
        "author_id" : 5,
        "edited_by_id" : 3
    },

  });
  const resJson = result.json();
  expect(resJson.status).toBe(500);
});

test('Test create Card without author Id if execute equal 500 ', () => {
  const result = fetch(routeCard,{
    method:"post",
    body:{
        "title" : "bonjour je suis le titre",
        "edited_by_id" : 3
    },

  });

  const resJson = result.json();
  expect(resJson.status).toBe(500);
});

test('Test create Card without edited Id if execute equal 500 ', () => {
    const result = fetch(routeCard,{
      method:"post",
      body:{
        "title" : "bonjour je suis le titre",
        "author_id" : 5,
        
      },
  
    });
    
    const resJson = result.json();
    expect(resJson.status).toBe(500);
  });
