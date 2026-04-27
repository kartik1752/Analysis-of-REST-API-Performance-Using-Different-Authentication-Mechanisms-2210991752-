// middleware/jwtAuth.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(403);

  jwt.verify(token.split(' ')[1], 'secret', (err, user) => {
    if (err) return res.sendStatus(403);
    next();
  });
};