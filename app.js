// app.js

/**
 * Required External Modules
 */

var express = require('express');
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var path = require("path");
var BlogPost = require('./models/blogPost');

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "3000";
const url = 'mongodb://127.0.0.1:27017/myBlog'

/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }))

// Connecting to MongoDB through Mongoose (db name = myBlog)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/**
 * Routes Definitions
 */

app.get('/', async (req, res) => {
  // res.render('index');
  const posts = await BlogPost.find()
  // console.log(posts)
  res.render('index', {blogPosts: posts})
});

// Save new post to Mongo
app.post('/createPost', (req, res) => {
  function saveBlogPost (blogPost) {
    const c = new BlogPost(blogPost)
    return c.save()
  };

  saveBlogPost({
    title: req.body.title,
    content: req.body.content,
    author: 'ar'
  })
  .then(doc => {
    console.log(doc),
    res.redirect('/')
  })
  .catch(error => { console.error(error) })
})

/**
 * Server Activation
 */

 app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
