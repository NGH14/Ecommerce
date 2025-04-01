const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

// require('./databases/init.mongodb');

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(compression());

app.use('/', require('./routes'));

module.exports = app;
