'use strict';
// package imports
var express = require('express');
var path = require('path');
var cors = require('cors')

// server config
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
var indexRouter = require('./routes/index');

// server endpoints
app.use('/', indexRouter);

// run server
app.listen( process.env.PORT || 3000, () => console.log('server is running') );