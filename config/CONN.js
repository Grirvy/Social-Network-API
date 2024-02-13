const { connect, connection } = require('mongoose');
require('dotenv').config();

(async () => {
    if (connection.readyState !== 1) {
        try {
            await connect(process.env.MONGOSRV);
            console.log("Database connected!");
        } catch (error) {
            console.error("Error connecting to database:", error.message);
        }
    } else {
        console.log("Database already connected.");
    }
})();

module.exports = connection;


// config/CONN.js