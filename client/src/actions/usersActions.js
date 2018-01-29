import axios from 'axios';

export const FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS';
export const FETCH_USER_DETAILS_FAILURE = 'FETCH_USER_DETAILS_FAILURE';
export const EDIT_USER_DETAILS_SUCCESS = 'EDIT_USER_DETAILS_SUCCESS';
export const EDIT_USER_DETAILS_FAILURE = 'EDIT_USER_DETAILS_FAILURE';
export const EDIT_USER_DETAILS_REQUEST = 'EDIT_USER_DETAILS_REQUEST';

const BASE_URL = '/api/v1/';

export const fetchUserDetailsSuccess = userDetails => ({
  type: FETCH_USER_DETAILS_SUCCESS,
  userDetails
});

export const fetchUserDetailsFailure = message => ({
  type: FETCH_USER_DETAILS_FAILURE,
  message
});


export const fetchUserDetails = () => {
  const request = axios({
    method: 'get',
    url: `${BASE_URL}user`
  });
  return dispatch => request.then(res => dispatch(fetchUserDetailsSuccess(res.data.user)));
};

export const editUserDetailsSuccess = userDetails => ({
  type: EDIT_USER_DETAILS_SUCCESS,
  userDetails
});

export const editUserDetailsFailure = message => ({
  type: EDIT_USER_DETAILS_FAILURE,
  message
});

export const editUserDetailsRequest = userDetails => {
  const request = axios({
    method: 'put',
    data: userDetails,
    url: `${BASE_URL}user`
  });
  return dispatch => {
    return request.then(res => {
      dispatch(editUserDetailsSuccess(res.data.user))
    })
    .catch( res => {
      dispatch(editUserDetailsFailure(res.data.message))
    })
  };
};