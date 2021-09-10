import axios from 'axios';

import actionTypes from './actionTypes';
export default function userRefreshToken(refreshToken) {
    return async (dispatch) => {
      try {
        console.log('reeeeeeerfrestoken');
        const { data } = await axios.post('http://localhost:5000/refreshToken', { refreshToken });
        console.log('data userRefreshToken');
  
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