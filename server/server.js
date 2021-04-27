/**
 * Required External Modules
 */

const express = require('express');
const path = require("path");
const bodyParser= require('body-parser');
const mongoose = require('mongoose');


// Importing models
const post = require('./models/post');
const user = require('./models/user');
const comment = require('./models/comment');

// Importing routes
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "3000";
const url = 'mongodb://127.0.0.1:27017/myBlog'

/**
 *  App Configuration
 */

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(postRoutes);
// app.use(userRoutes);
// app.use(commentRoutes);

// Use express's default error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ err: err });
});

// Connecting to MongoDB through Mongoose (db name = myBlog)
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/**
 * Server Activation
 */

 app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
});
