module.exports = (libs, options) => {
  const { assert, fetch } = libs;
  const { headers, baseUrl } = options;
  describe('Test for creation of list', () => {
    it('should return status 200', async () => {
      const response = await fetch(`${baseUrl}/list`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          title: 'Tset',
          user_id: 1,
        }),
      }).then((res) => ({
        body: res.json(),
        status: res.status,
      }));

      assert.equal(response.status, 200);
    });
  });
};
