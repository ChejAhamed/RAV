import actionTypes from "../actions/actionTypes";
export default function loadAllUsersReducer(
    users = [],
    action,
  ) {
    let nextUsersState = users;
  
    switch (action.type) {
      case actionTypes.LOAD_ALL_USERS:
        nextUsersState = action.users;
        console.log("reduceeer user",nextUsersState)
        break;
  
      default:
        break;
    }
  
    return nextUsersState;
  }