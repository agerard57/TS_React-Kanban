const routeCard="Https://localhost:3001/list/card"

test('Test delete card with id 1 if execute equal 200 ', () => {
  const id = 1;
  const result= fetch(routeCard + "/" + id,{
    method:"delete",
  });
  const resJson=result.json();
  expect(resJson.status).toBe(200);
});