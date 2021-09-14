import actionTypes from '../actions/actionTypes';


export default function loggedUserReducer(
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
      
      break;

    case actionTypes.AUTH_LOGOUT:
      nextAuthState = authInitialState;
      break;
      case actionTypes.UPDATE_USER:
       
        nextAuthState.user.user[`${action.payload.propertyName}`]=action.payload.value;
        
        
          break;

    default:
      break;
  }
   
  return nextAuthState;
}