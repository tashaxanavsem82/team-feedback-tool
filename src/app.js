const express = require('express');
const feedbackRouter = require('./routers/feedback');
const userRouter = require('./routers/user');

the app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/feedback', feedbackRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Team Feedback Tool API!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
