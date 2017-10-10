import { combineReducers } from 'redux';
import auth from './reducers/auth';
import recipeReducer from './reducers/recipeReducers'

export default combineReducers({
    auth,
    recipeReducer
});