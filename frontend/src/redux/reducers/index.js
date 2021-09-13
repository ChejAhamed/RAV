import {combineReducers} from 'redux';
import quiz from './quizReducers';

import activeQuiz from './activeQuizReducer';
import scoreQuiz from './addScoreQuizReducer';
import totalScore from './totalScoreReducer';
import tokensReducer from './tokenReducer';
import loadAllUsers from './loadAllUsersReducer';
import loggedUser from './loggedUserReducers';
export default combineReducers({
 
  loggedUser,
 
  quiz,
  activeQuiz,
  scoreQuiz,
  totalScore,
  tokensReducer,
  loadAllUsers

  

});
