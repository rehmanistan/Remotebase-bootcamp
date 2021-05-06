const mongoose = require('mongoose');
mongoose.Promise = global.Promise

const blogDBurl = 'mongodb://127.0.0.1:27017/blogDB'

// Connecting to MongoDB through Mongoose (db name = myBlog)
mongoose.connect(blogDBurl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db
