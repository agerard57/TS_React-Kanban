/* eslint-disable no-param-reassign */

module.exports = (libs, options) => {

  const headers = {...options.headers, Authorization: `Bearer ${options.token}`};
  const optionsWithToken = {
    headers,
    baseUrl: options.baseUrl
  };

  console.log(optionsWithToken);

  require('./createList.test')(libs, optionsWithToken);
};


