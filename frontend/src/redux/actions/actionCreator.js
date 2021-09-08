import axios from 'axios';

import actionTypes from './actionTypes';

export function loadAllQuiz() {
  return async dispatch => {
    try {
      
      const {data} = await axios.get('http://localhost:5000/api/quiz');
      
      dispatch({
        type: actionTypes.LOAD_ALL_QUIZ,
        data,
        
      });
    } catch (error) {
      console.log(error);
    }
    
  };
}

export function checkActiveQuiz(data) {
  return dispatch=>{
    try {
      dispatch({
        type: actionTypes.ACTIVE_QUIZ,
        data
      })
    } catch (error) {
      console.log(error)
    }

  }

}
export function addScoreQuiz(data){
  return dispatch=>{
    try {
      dispatch({
        type:actionTypes.SCORE_QUIZ,
        data
      })

    } catch(error){

    }
  }
}