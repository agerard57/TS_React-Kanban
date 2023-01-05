// const assert = require('assert');
// const fetch = require('node-fetch');

module.exports = (libs, options) => {
  const { assert, fetch } = libs;
  const { headers, baseUrl } = options;
  describe('Test for creation of list', () => {
    it('should return status 200', async () => {;
      const response = await fetch(`${baseUrl}/list`, {
        
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${options.token}`
        },
        method: 'POST',
        body: {
          title: 'Tset',
          user_id: 0
        }
      }).then((res) => ({
          'body': res.json(),
          'status': res.status
      }));

      assert.equal(response.status, 200);
    });
  });
};
