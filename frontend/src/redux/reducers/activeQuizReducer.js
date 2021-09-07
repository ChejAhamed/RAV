import actionTypes from '../actions/actionTypes';

export default function activeQuizReducer(activeQuiz={}, action){
    let activedQuiz = activeQuiz;
    switch (action.type) {
      case actionTypes.ACTIVE_QUIZ:
        activedQuiz = action.data;
        break;
      default:
        break;
    }
    return activedQuiz;
  }