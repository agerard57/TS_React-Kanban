module.exports = (libs, options) => {
  const { assert, fetch, faker } = libs;
  const { headers, baseUrl } = options;

  describe('Test for creation of user', () => {
    it('should return status 200', async () => {
      const response = await fetch(`${baseUrl}/user/register`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: 'Tset@tset.tuvalu',
          password: faker.internet.password(),
          color: faker.internet.color(),
        }),
      }).then((res) => ({
        body: res.json(),
        status: res.status,
      }));

      assert.equal(response.status, 200);
    });
  });
};
