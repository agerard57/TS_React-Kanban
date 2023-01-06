module.exports = (libs, options) => {
  require('./connectUser.test')(libs, options);
  require('./createUser.test')(libs, options);
};
