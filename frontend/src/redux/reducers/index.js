import {combineReducers} from 'redux';
import quiz from './quizReducers';
import activeQuiz from './activeQuizReducer';
import scoreQuiz from './addScoreQuizReducer';
import totalScore from './totalScoreReducer';
import users from './userReducer';
import notification from './notificationReducer'
export default combineReducers({
  quiz,
  activeQuiz,
  scoreQuiz,
  totalScore,
  users,
  notification
});
