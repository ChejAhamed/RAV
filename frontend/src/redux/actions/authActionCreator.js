import axios from 'axios';

import actionTypes from './actionTypes';


export function login(user) {
  console.log(user);
  return async (dispatch) => {
    console.log(dispatch);
    try {
      const { data } = await axios.post('http://localhost:5000/login', user);
      console.log('login:');
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

export default function userRefreshToken(refreshToken) {
    return async (dispatch) => {
      try {
        console.log('reeeeeeerfrestoken');
        const { data } = await axios.post('http://localhost:5000/refreshToken', { refreshToken });
        console.log('data userRefreshToken', data);
  
        console.log(data);
        return dispatch({
          type: actionTypes.REFRESH_TOKEN,
          token: data
        });
      } catch (error) {
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