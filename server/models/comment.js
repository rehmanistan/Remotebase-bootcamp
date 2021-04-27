const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define comment model
const commentSchema = new Schema({
  content: String,
  author: String,
  dateCreated: Date
});

// Create the model class
const ModelClass = mongoose.model('comment', commentSchema);

// Export the model
module.exports = ModelClass;
