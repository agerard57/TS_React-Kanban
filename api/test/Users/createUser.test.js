module.exports = (libs, options) => {
  const { assert, fetch, faker } = libs;
  const { headers, baseUrl } = options;

  describe('Test for creation of user', () => {
    it('should return status 200', async () => {
      const response = await fetch(`${baseUrl}/user/register`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          firstname: faker.name.firstName(),
          surname: faker.name.lastName(),
          email: faker.internet.email().toLowerCase(),
          password: faker.internet.password(),
          color: faker.internet.color(),
        }),
      }).then((res) => ({
        body: res.json(),
        status: res.status,
      }));

      assert.equal(response.status, 200);
    });

    it('should return status 500 if first is not filled', async () => {
      const response = await fetch(`${baseUrl}/user/register`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          surname: faker.name.lastName(),
          email: faker.internet.email().toLowerCase(),
          password: faker.internet.password(),
          color: faker.internet.color(),
        }),
      }).then((res) => ({
        body: res.json(),
        status: res.status,
      }));

      assert.equal(response.status, 500);
    });

    it('should return status 500 if last name is not filled', async () => {
      const response = await fetch(`${baseUrl}/user/register`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          firstname: faker.name.firstName(),
          email: faker.internet.email().toLowerCase(),
          password: faker.internet.password(),
          color: faker.internet.color(),
        }),
      }).then((res) => ({
        body: res.json(),
        status: res.status,
      }));

      assert.equal(response.status, 500);
    });

    it('should return status 500 if password is not filled', async () => {
      const response = await fetch(`${baseUrl}/user/register`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          firstname: faker.name.firstName(),
          surname: faker.name.lastName(),
          email: faker.internet.email().toLowerCase(),
          color: faker.internet.color(),
        }),
      }).then((res) => ({
        body: res.json(),
        status: res.status,
      }));

      assert.equal(response.status, 500);
    });
  });
};
