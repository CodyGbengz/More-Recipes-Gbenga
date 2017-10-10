import { combineReducers } from 'redux';
import auth from './reducers/auth';
import recipes from './reducers/recipeReducers'

export default combineReducers({
    auth,
    recipes
});