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
        type: actionTypes.SCORE_QUIZ,
        data
      })

    } catch(error){
      console.log(error)
    }
  }
}
export function totalScore(data){
  return dispatch=>{
    try {
      dispatch({
        type: actionTypes.TOTAL_SCORE,
        data
      })

    } catch(error){
      console.log(error)
    }
  }
}
export function login(name) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/login', { name });
      return dispatch({
        type: actionTypes.AUTH_LOGIN,
        user: data,
      });
    } catch (error) {
      if (error?.response?.status === 401) {
        return dispatch({
          type: actionTypes.AUTH_LOGIN_ERROR,
          message: error.message,
        });
      }

      return dispatch({
        type: actionTypes.ERROR_GENERIC,
        message: error.message,
      });
    }
  };
}

export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}

export function loadUsers() {
  return async (dispatch) => {
    const { data } = await axios('/api/user');
    dispatch({
      type: actionTypes.USERS_LOAD,
      users: data,
    });
  };
}

