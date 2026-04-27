// routes/testRoute.js
const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
  res.json({ message: "Success" });
});

module.exports = router;