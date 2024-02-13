const express = require('express');
const router = express.Router();
const ThoughtController = require('../../controllers/ThoughtsController');

// Route to get all thoughts
router.get('/', ThoughtController.getAllThoughts);

// Route to get a single thought by ID
router.get('/:thoughtId', ThoughtController.getThoughtById);

// Route to create a new thought
router.post('/', ThoughtController.createThought);

// Route to update a thought by ID
router.put('/:thoughtId', ThoughtController.updateThought);

// Route to delete a thought by ID
router.delete('/:thoughtId', ThoughtController.deleteThought);

module.exports = router;
