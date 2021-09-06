const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  score: Number,
  quizCompleted: Number

});
module.exports = mongoose.model('User', userSchema);
