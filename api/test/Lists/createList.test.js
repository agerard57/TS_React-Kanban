const assert = require('assert');
const fetch = require('node-fetch');

module.exports = () => {
  describe('Test for creation of list', () => {
    it('should return status 200', async () => {
      const response = await fetch('http://localhost:3001/list', {
        method: 'POST',
        body: {
          title: 'Tset',
          user_id: 5
        }
      }).then((res) => ({
          'body': res.json(),
          'status': res.status
      }));

      assert.equal(response.status, 200);
    });
  });
};
