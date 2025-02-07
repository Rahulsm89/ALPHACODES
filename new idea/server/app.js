const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requestRoutes = require('./routes/requestRoutes');
const db = require('./config/db');

const app = express();

// Connect to MongoDB
mongoose.connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/requests', requestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));