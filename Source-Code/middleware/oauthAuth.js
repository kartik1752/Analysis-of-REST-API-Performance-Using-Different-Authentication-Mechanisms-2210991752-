module.exports = (req, res, next) => {
  const token = req.headers['authorization'];

  console.log("HEADER RECEIVED:", token); // 🔥 debug line

  if (token && token.toLowerCase().includes('oauth_token')) {
    next();
  } else {
    res.status(403).send('Unauthorized');
  }
};