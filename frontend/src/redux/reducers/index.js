import {combineReducers} from 'redux';
import quiz from './quizReducers';

import activeQuiz from './activeQuizReducer';
import scoreQuiz from './addScoreQuizReducer';
import totalScore from './totalScoreReducer';
import users from './userReducer';
import tokensReducer from './tokenReducer';

import authUser from './authReducers';
export default combineReducers({
  quiz,
  activeQuiz,
  scoreQuiz,
  totalScore,
  authUser,
  tokensReducer,
  users
  

});
