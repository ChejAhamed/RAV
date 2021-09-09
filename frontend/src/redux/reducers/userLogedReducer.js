import actionTypes from "../actions/actionTypes";

export default function userLogedReducer(user = [], action) {
    let nextUserState = user;
    switch (action.type) {
      case actionTypes.AUTH_LOGIN:
        nextUserState  = action.data;
        break;
      default:
        break;
    }
    return nextUsersState ;
  }
  
  