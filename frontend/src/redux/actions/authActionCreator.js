import axios from 'axios';

import actionTypes from './actionTypes';


export default function login(user) {
  console.log(user);
  return async (dispatch) => {
    console.log(dispatch);
    try {
      const { data } = await axios.post('http://localhost:5000/login', user);
      console.log('login:' ,data);
      console.log(data);
      return dispatch({
        type: actionTypes.AUTH_LOGIN,
        user: data
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 401) {
        return dispatch({
          type: actionTypes.AUTH_LOGIN_ERROR,
          message: error.message
        });
      }
      return dispatch({
        type: actionTypes.ERROR_GENERIC,
        message: error.message
      });
    }
  };
}
