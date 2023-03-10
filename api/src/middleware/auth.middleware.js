const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');

const extractBearerToken = (headerValue) => {
  if (typeof headerValue === 'string') {
    const matches = headerValue.match(/(bearer)\s+(\S+)/i);
    return matches && matches[2];
  }
  return null;
};

exports.checkTokenMiddleware = (req, res, next) => {
  const token =
    req.headers.authorization && extractBearerToken(req.headers.authorization);

  if (!token) {
    return res.status(401).json({ message: 'Error. No Bearer token provided' });
  }

  return jwt.verify(token, authConfig.secret, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Error. The token is not valid' });
    }
    return next();
  });
};
