require("dotenv").config();
const config=require('config')
const logger=require('./middleware/logger')
const courses = require('./routes/courses')
const home=require('./routes/home')
const express = require("express");
const helmet=require("helmet");
const app = express();


console.log(`NODE ENV: ${process.env.NODE_ENV}`)
console.log(`App ${app.get('env')}`)


app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //built in middleware to parse urlencoded bodies
app.use(express.static("public")); //built in middleware to serve static files inside public folder-> now you can access readme.txt file in browser


//configurations
console.log('Application Name: '+config.get('name'))

// middleware
app.use(logger)
app.use(function (req, res, next) {
  console.log('Authenticating...');
  next();
})

app.use('/', home );
app.use('/api/courses', courses);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...   `);
});
