import { SIGNIN_USER_SUCCESS, SIGNIN_USER, SIGNIN_USER_FAILURE } from '../actions/authAction';

const INITIAL_STATE = { isAuthenticated: false, user: {}};

export default (state = INITIAL_STATE, action) => {
    let error;
    switch(action.type) {
        case SIGNIN_USER:
            return {
                ...state, user: null, isAuthenticated: false, error: null, loading: true
            };
        case SIGNIN_USER_SUCCESS:
            return {
                isAuthenticated: true,
                user: action.user
            };
        case SIGNIN_USER_FAILURE:
            return {
                ...state, user: null, isAuthenticated: false, error: error, loading: false
            }
        default: return state;
    }
}