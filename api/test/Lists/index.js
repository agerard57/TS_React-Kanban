module.exports = (libs, options) => {
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${options.token}`,
  };
  const optionsWithToken = {
    headers,
    baseUrl: options.baseUrl,
  };

  require('./createList.test')(libs, optionsWithToken);
};
