import actionTypes from '../actions/actionTypes';

export default function quizReducer(quiz = [], action) {
  let nextQuiz = quiz;
  switch (action.type) {
    case actionTypes.LOAD_ALL_QUIZ:
      nextQuiz = action.data;
      break;
    default:
      break;
  }
  return nextQuiz;
}

