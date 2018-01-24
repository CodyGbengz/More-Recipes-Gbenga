import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function userSignupRequest(userData) {
  return dispatch => axios.post('/api/v1/users/signup', userData).then((res) => {
    window.location = '/recipes';
    const token = res.data.token;
    localStorage.setItem('jwtToken', token);
    setAuthToken(jwtDecode(token));
    dispatch(setCurrentUser(jwtDecode(token)));
  }).catch((error) => {
    Materialize.toast(error.response.data.message, 3000, 'red');
  });
}
