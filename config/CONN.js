const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
let uri = process.env.MONGOSRV;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectToMongo() {
    try {
        await client.connect();
            console.log('Connection to MongoDB server successful!');
        return client;

    } catch (err) {
        console.error('Error connecting to MongoDB server:', err);
            throw err;
    }
};

async function connectToMongoose() {
    try {
        // Construct the MongoDB connection URI
        const uri = process.env.MONGOSRV;

        // Connect to MongoDB using Mongoose
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connection to MongoDB through Mongoose successful!');
        return mongoose.connection; // Return the Mongoose connection object

    } catch (err) {
        console.error('Error connecting to MongoDB via Mongoose:', err);
        throw err;
    }
};

module.exports = connectToMongoose;
module.exports = connectToMongo;

// config/CONN.js
