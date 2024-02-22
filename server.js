const express = require('express');
const connectToMongoose = require('./config/CONN');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

Promise.all([connectToMongoose()])
  .then(() => {
    app.use(routes);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}!`);
    });
  })
  .catch(error => {
    console.error("Error connecting to server:", error);
});

// server.js