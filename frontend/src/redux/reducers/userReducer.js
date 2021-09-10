import actionTypes from '../actions/actionTypes';


export default function usersReducer(
  users = [],
  action,
) {
  let nextUsersState = users;

  switch (action.type) {
    case actionTypes.USERS_LOAD:
      nextUsersState = action.users;
      console.log("reduceeer user",nextUsersState)
      break;

    default:
      break;
  }

  return nextUsersState;
}