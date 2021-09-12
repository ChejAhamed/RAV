import actionTypes from '../actions/actionTypes';


export default function authUserReducer(
  auth ={ authInitialState:false,user:{}},
  action,
) {
  let nextAuthState = auth;

  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      nextAuthState = {
        isAuthenticated: true,
        user: action.user,
      };
      localStorage.setItem("userData",JSON.stringify({user:action.user}))
      localStorage.setItem("jwt",JSON.stringify(action.user.token))
      break;

    case actionTypes.AUTH_LOGOUT:
      nextAuthState = authInitialState;
      break;

    default:
      break;
  }
   
  return nextAuthState;
}