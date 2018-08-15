const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const path = require('path');
const API_VERSION = 'api/v1/';
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(`/super-admin/${API_VERSION}`, routes);


module.exports = app;