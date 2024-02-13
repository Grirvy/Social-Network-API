const Thought = require('../models/Thought');

const ThoughtController = {
  // Get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single thought by ID
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new thought
  async createThought(req, res) {
    try {
      const thought = new Thought(req.body);
      await thought.save();
      res.status(201).json(thought);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Update a thought by ID
  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a thought by ID
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = ThoughtController;
