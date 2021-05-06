const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TBD: Add validation

// Define comment model
const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.ObjectId, ref: 'user'
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

// Create the model class
const ModelClass = mongoose.model('comment', commentSchema);

// Export the model
module.exports = ModelClass;
