const express = require('express');
const socketIO = require('socket.io');
var router = express.Router();
var app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');
const HOST = path.join(__dirname, 'host.html');

// Starts server
app.use('/', express.static(__dirname + '/'));
const server = app.listen(PORT, () => console.log(`Listening on ${ PORT }`))