require('dotenv').config();

// Initial setup
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express(); //create express app
app.use(express.json()); //Parse JSON bodies
app.use(express.urlencoded()); //Parse URL -encoded bodies
app.use(morgan('combined')); //HTTP request logger middleware for node.js
app.use(cors()); //Allow any host or client to access it (cors middleware)

// Database connection
const mySQLconn = require('./config/db')
mySQLconn.connect((err) => {
    if (!err) {
        console.log('MySQL connection established successfully.')
    } else {
        console.log('MySQL connection failed. ' + JSON.stringify(err,undefined,2))
    }
})

// Routes
const users = require('./routes/users');
const currency = require('./routes/currency');
app.use('/api/users', users);
app.use('/api/currency', currency);

// Setup server port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});