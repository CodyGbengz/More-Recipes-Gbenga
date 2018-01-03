import { combineReducers } from 'redux';
import auth from './reducers/auth';
import { recipes, recipe } from './reducers/recipeReducers';
import favorites from './reducers/favoritesReducer';
import usersrecipes from './reducers/usersRecipesReducer'

export default combineReducers({
  auth,
  recipes,
  recipe,
  favorites,
  usersrecipes
});