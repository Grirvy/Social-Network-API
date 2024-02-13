const Reaction = require('../models/Reaction');
const Thought = require('../models/Thought');

const ReactionController = {
  // Create a new reaction for a thought
  async createReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      const newReaction = new Reaction({
        reactionBody: req.body.reactionBody,
        username: req.body.username
      });

      thought.reactions.push(newReaction);
      await thought.save();

      res.status(201).json(newReaction);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a reaction
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }

      const reaction = thought.reactions.id(req.params.reactionId);
      if (!reaction) {
        return res.status(404).json({ message: 'Reaction not found' });
      }

      reaction.remove();
      await thought.save();

      res.json({ message: 'Reaction deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = ReactionController;
