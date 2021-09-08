const mongoose = require('mongoose');

const isValidPassword = require('../functions/functions');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: { type: String, default: process.env.AVATAR },
  totalScore: Number,
  quizCompleted: Number,
  rank: String

});
userSchema.methods.isValidPassword = isValidPassword;

module.exports = mongoose.model('User', userSchema);
