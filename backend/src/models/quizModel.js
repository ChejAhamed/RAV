const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  question: String,
  category: String,
  answers: [
    {
      text: {
        type: String,
        required: true
      },
      isCorrect: {
        type: Boolean,
        default: false
      }
    }
  ]
});
module.exports = mongoose.model('Quiz', quizSchema);
