const express = require('express');
const router = express.Router();
const ReactionController = require('../../controllers/ReactionController');

// Route to create a new reaction
router.post('/:thoughtId/reactions', ReactionController.createReaction);

// Route to delete a reaction
router.delete('/:thoughtId/reactions/:reactionId', ReactionController.deleteReaction);

module.exports = router;
