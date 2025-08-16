const express = require('express');
const router = express.Router();

// Placeholder for user management
let users = [];

// Register new user
router.post('/', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send('User registered successfully!');
});

// Get user list
router.get('/', (req, res) => {
    res.status(200).json(users);
});

module.exports = router;
