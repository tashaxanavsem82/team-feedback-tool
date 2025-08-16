const express = require('express');
const router = express.Router();

// Placeholder for feedback submissions
let feedbackList = [];

// Submit feedback
router.post('/', (req, res) => {
    const feedback = req.body;
    feedbackList.push(feedback);
    res.status(201).send('Feedback submitted successfully!');
});

// Get feedback
router.get('/', (req, res) => {
    res.status(200).json(feedbackList);
});

module.exports = router;
