// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect Database
mongoose.connect('mongodb://localhost:27017/cefalocricket');

// Get our API routes
const api = require('./server/routes/api');
const apiuser = require('./server/routes/apiuser');
const apiplayer = require('./server/routes/apiplayer');
const apisquad = require('./server/routes/apisquad');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);
app.use('/api/user',apiuser);
app.use('/api/player',apiplayer);
app.use('/api/squad',apisquad);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));