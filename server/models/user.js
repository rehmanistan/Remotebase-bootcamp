const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define user model
const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  dateCreated: Date
});

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
