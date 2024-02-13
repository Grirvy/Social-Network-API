const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');

// Route to get all users
router.get('/', UserController.getAllUsers);

// Route to get a single user by ID
router.get('/:userId', UserController.getUserById);

// Route to create a new user
router.post('/', UserController.createUser);

// Route to update a user by ID
router.put('/:userId', UserController.updateUser);

// Route to delete a user by ID
router.delete('/:userId', UserController.deleteUser);

module.exports = router;
