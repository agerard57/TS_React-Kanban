const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');

/* Récupération du header bearer */
const extractBearerToken = headerValue => {
    if (typeof headerValue !== 'string') {
        return false;
    }

    const matches = headerValue.match(/(bearer)\s+(\S+)/i);
    return matches && matches[2];
}

/* Vérification du token */
exports.checkTokenMiddleware = (req, res, next) => {
    // Récupération du token
    const token = req.headers.authorization && extractBearerToken(req.headers.authorization);

    // Présence d'un token
    if (!token) {
        return res.status(401).json({ message: 'Error. No Baerer token provided' });
    }

    // Véracité du token
    jwt.verify(token, authConfig.secret , (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: 'Error. The token is not valid' });
        } else {
            return next();
        }
    })
}