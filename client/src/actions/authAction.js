import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

export function signInUserSuccess(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    user
  };
}

export function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error
  };
}
export function signInUser(userData) {
  return dispatch => axios.post('/api/v1/users/signin', userData)
    .then((res) => {
      window.location = '/recipes';
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      dispatch(signInUserSuccess(jwtDecode(token)));
    })
    .catch((error) => {
      Materialize.toast(error.response.data.message, 3000, 'red');
    });
}
