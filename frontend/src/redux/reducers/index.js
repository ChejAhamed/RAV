import {combineReducers} from 'redux';
import quiz from './quizReducers';
import activeQuiz from './activeQuizReducer';
import scoreQuiz from './addScoreQuiz';

export default combineReducers({
  quiz,
  activeQuiz,
  scoreQuiz
});
