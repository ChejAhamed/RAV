import actionTypes from '../actions/actionTypes';

export default function tokensReducer(tokens = {}, action) {
  let newTokens = tokens;

  switch (action.type) {
    // case actionTypes.AUTH_LOGIN:
    //   newTokens = {
    //     token: action.user.token,
    //     refreshToken: action.user.refreshToken
    //   };

    //   break;

    case actionTypes.REFRESH_TOKEN:
      newTokens = {
        ...newTokens,
        token: action.data.token
      };
      break;

    default:
      break;
  }
  return newTokens;
}