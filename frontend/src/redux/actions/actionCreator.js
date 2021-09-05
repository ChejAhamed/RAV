import axios from 'axios';
import actionTypes from './actionTypes';

export function loadAllQuiz() {
  return async dispatch => {
    try {
      const {data} = await axios('http://localhost:5001/api/quiz/');
      dispatch({
        type: actionTypes.LOAD_ALL_QUIZ,
        data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
