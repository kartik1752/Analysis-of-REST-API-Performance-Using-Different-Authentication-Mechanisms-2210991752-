// middleware/apiKeyAuth.js
module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === '12345') next();
  else res.status(403).send('Forbidden');
};