import { combineReducers } from 'redux';
import auth from './reducers/auth';
import { recipes, recipe } from './reducers/recipeReducers';
import favorites from './reducers/favoritesReducer';

export default combineReducers({
  auth,
  recipes,
  recipe,
  favorites
});