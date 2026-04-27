const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const apiKeyAuth = require('./middleware/apiKeyAuth');
const jwtAuth = require('./middleware/jwtAuth');
const oauthAuth = require('./middleware/oauthAuth');

const route = require('./routes/testRoute');

// Different endpoints for testing
app.use('/api-key', apiKeyAuth, route);
app.use('/jwt', jwtAuth, route);
app.use('/oauth', oauthAuth, route);

app.listen(3000, () => console.log("Server running"));

console.log(jwt.sign({ user: "test" }, "secret"));