const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');

// get the bearer token from the header
const extractBearerToken = headerValue => {
    if (typeof headerValue !== 'string') {
        return false;
    }

    const matches = headerValue.match(/(bearer)\s+(\S+)/i);
    return matches && matches[2];
}

// verify is the token is on header and is valid
exports.checkTokenMiddleware = (req, res, next) => {
    
    const token = req.headers.authorization && extractBearerToken(req.headers.authorization);

    if (!token) {
        return res.status(401).json({ message: 'Error. No Baerer token provided' });
    }

    jwt.verify(token, authConfig.secret , (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: 'Error. The token is not valid' });
        } else {
            return next();
        }
    })
}