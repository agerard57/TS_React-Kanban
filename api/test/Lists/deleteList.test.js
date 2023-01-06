const routeList = 'localhost:3001/list';

test('Test delete List with id 1 if execute equal 200 ', () => {
  const id = 1;
  const result = fetch(`${routeList}/${id}`, {
    method: 'delete',
  });
  const resJson = result.json();
  expect(resJson.status).toBe(200);
});
