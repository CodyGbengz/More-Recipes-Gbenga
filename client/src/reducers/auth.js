import { SIGNIN_USER_SUCCESS, SIGNIN_USER, SIGNIN_USER_FAILURE } from '../actions/authAction';
import { EDIT_USER_DETAILS_SUCCESS } from '../actions/usersActions';

export default (state = { isAuthenticated: false,
  user: {},
  error: null,
  loading: false }, action) => {
  let error;
  switch (action.type) {
    case SIGNIN_USER:
      return {
        state,
        user: null,
        isAuthenticated: false,
        error: null,
        loading: true
      };
    case SIGNIN_USER_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.user
      };
    case SIGNIN_USER_FAILURE:
      return {
        state,
        user: null,
        isAuthenticated: false,
        error,
        loading: false
      };
    case EDIT_USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          image_url: action.userDetails.image_url
        }
      };
    default: return state;
  }
};
