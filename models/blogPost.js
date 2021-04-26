var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogPostSchema = new Schema({
  title: String,
  content: String,
  author: String
  // dateCreated: Date
});


module.exports = mongoose.model('blogPostModel', BlogPostSchema);
