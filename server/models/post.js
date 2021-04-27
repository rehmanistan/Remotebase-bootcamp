const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the post model
const postSchema = new Schema({
  title: String,
  content: String,
  author: String,
  dateCreated: Date
});

// Create the model class
const ModelClass = mongoose.model('post', postSchema);

// Export the model
module.exports = ModelClass
