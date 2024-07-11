require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./routes');
const errHandler = require('./utils/errorHandler');

const PORT = process.env.PORT ? process.env.PORT : 4012;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', router);

// Error Handler
app.use(errHandler);

// Start Server
app.listen(PORT, () => {
    console.log(`App running on PORT:${PORT}`);
});
