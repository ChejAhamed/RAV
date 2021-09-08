import {combineReducers} from 'redux';
import quiz from './quizReducers';
import activeQuiz from './activeQuizReducer';
import scoreQuiz from './addScoreQuizReducer';
import totalScore from './totalScoreReducer';


export default combineReducers({
  quiz,
  activeQuiz,
  scoreQuiz,
  totalScore
});
