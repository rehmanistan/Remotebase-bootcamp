const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TBD: Add validation

// Define the post model
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // author: {type: Schema.ObjectId, ref: 'user'},
  author: {
    type: Schema.ObjectId,
    ref: "user",
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Create the model class
const ModelClass = mongoose.model("post", postSchema);

// Export the model
module.exports = ModelClass;
