import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwtDecode from 'jwt-decode';

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
    return dispatch => {
        return axios.post('/api/users/signin', userData).then(res => {
            window.location = '/recipes';
            const token = res.data.token;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            dispatch(signInUserSuccess(jwtDecode(token)));
        });
    }
}