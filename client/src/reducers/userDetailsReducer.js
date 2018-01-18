import {
  FETCH_USER_DETAILS_FAILURE,
  FETCH_USER_DETAILS_SUCCESS
} from '../actions/usersActions';

const userDetailsReducer = (state = { }, action) => {
  const { type, userDetails, error } = action;
  switch (type) {
    case FETCH_USER_DETAILS_SUCCESS:
      return {
        ...state,
        ...userDetails
      };
    case FETCH_USER_DETAILS_FAILURE:
      return {
        ...state,
        ...error
      };
    default:
      return state;
  }
};

export default userDetailsReducer;
