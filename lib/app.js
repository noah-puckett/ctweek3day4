const creatures = require('../public/js/creatures');
const express = require('express');

const app = express();

//tells express to parse incoming object as json
app.use(express.json());

app.use(creatures);

module.exports = app;
