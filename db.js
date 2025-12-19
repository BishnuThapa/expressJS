//install mongodb community server and mongodb compass in local machine
// set environment variable for mongodb bin folder
// run 'mongod' command in terminal to start mongodb server

// install mongoose package using npm


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));