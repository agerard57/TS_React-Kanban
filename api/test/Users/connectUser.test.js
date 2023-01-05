module.exports = (libs, options) => {
  const { assert, fetch, faker } = libs;
  const { headers, baseUrl } = options;

  const user = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    color: faker.internet.color(),
  };

  // Creation of user
  const createUser = () => {
    fetch(`${baseUrl}/user/register`, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        color: user.color,
      }),
    }).then((res) => ({
        body: res.json(),
        status: res.status,
      })
    );
  };

  createUser();
  

  describe('Test for connection of user', () => {
    it('should return status 200', () => {
      // Create user for connection
      fetch(`${baseUrl}/user/login`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      }).then((response) => {
        assert.equal(response.status, 200);
      }
      );
    });
  });
};
