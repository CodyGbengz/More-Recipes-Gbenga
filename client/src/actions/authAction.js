import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import Alert from '../utils/Alert';

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

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}
export const signInUser = (userData) => {
  return (dispatch) => {
    return axios.post('/api/v1/user/signin', userData)
    .then((res) => {
      window.location = '/recipes';
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      dispatch(signInUserSuccess(jwtDecode(token)));
    })
    .catch((error) => {
      Alert(error.response.data.message, 3000, 'red');
    });
  };
};

export const userSignupRequest = (userData) => {
  return (dispatch) => {
    return axios.post('/api/v1/user/signup', userData)
    .then((res) => {
      window.location = '/recipes';
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(jwtDecode(token));
      dispatch(setCurrentUser(token));
    }).catch((error) => {
      Alert(error.response.data.message, 3000, 'red');
    });
  };
};
