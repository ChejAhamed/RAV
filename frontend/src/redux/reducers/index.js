import {combineReducers} from 'redux';
import quiz from './quizReducers';
import authInitialState from '../../constants/authInitialState';
import activeQuiz from './activeQuizReducer';
import scoreQuiz from './addScoreQuizReducer';
import totalScore from './totalScoreReducer';
import users from './userReducer';

import authUser from './authReducers';
export default combineReducers({
  quiz,
  activeQuiz,
  scoreQuiz,
  totalScore,
  users,
  authUser
});
