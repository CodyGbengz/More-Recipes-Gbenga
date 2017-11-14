import { combineReducers } from 'redux';
import auth from './reducers/auth';
import { recipes, recipe } from './reducers/recipeReducers'
//import { review } from './reducers/reviewReducer'

export default combineReducers({
    auth,
    recipes,
    recipe
});