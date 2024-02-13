const { connect, connection } = require('mongoose');
require('dotenv').config();

connect(process.env.MONGOSRV);

module.exports = connection;

// config/CONN.js