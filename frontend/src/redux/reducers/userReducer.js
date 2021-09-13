import actionTypes from '../actions/actionTypes';


export default function usersReducer(
  user = [],
  action,
) {
  let nextUsersState = user;

  switch (action.type) {
    case actionTypes.USERS_LOAD:
      nextUsersState = action.user;
      break;
 

    default:
      break;
  }

  return nextUsersState;
}
