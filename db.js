//install mongodb community server and mongodb compass in local machine
// set environment variable for mongodb bin folder
// run 'mongod' command in terminal to start mongodb server

// install mongoose package using npm


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

//creating a schema for course collection
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    ispublished: Boolean
}, { timestamps: true })

const Course = mongoose.model('Course', courseSchema); // automatically converts Course to courses collection
async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        author: 'Mosh',
        tags: ['angular', 'frontend'],
        ispublished: true
    });
    const result = await course.save();
    console.log(result);
}

createCourse();
