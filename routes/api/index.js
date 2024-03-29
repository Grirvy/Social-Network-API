const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');
const reactionRoutes = require('./reactionRoutes');

router.use('/users', userRoutes);

router.use('/thoughts', thoughtRoutes);

router.use('/reactions', reactionRoutes);

module.exports = router;

//routes/api/index.js