import {combineReducers} from 'redux';
import quiz from './quizReducers';
import activeQuiz from './activeQuizReducer';

export default combineReducers({
  quiz,
  activeQuiz
});
