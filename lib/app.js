const express = require('express');

const app = express();

//tells express to parse incoming object as json
app.use(express.json());

module.exports = app;
