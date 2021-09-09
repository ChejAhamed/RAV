import actionTypes from "../actions/actionTypes";
const authInitialState={
  isAuthenticated: false,
};

export default function userLogedReducer(
  auth = authInitialState,
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

    default:
      break;
  }

  return nextAuthState;
}