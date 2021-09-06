import axios from 'axios';
import actionTypes from './actionTypes';

export function loadAllQuiz() {
  return async dispatch => {
    try {
      console.log('hola')
      const {data} = await axios.get('http://localhost:5000/api/quiz');
      console.log(data)
      dispatch({
        type: actionTypes.LOAD_ALL_QUIZ,
        data,
        
      });
    } catch (error) {
      console.log(error);
    }
    
  };
}
