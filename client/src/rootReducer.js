import { combineReducers } from 'redux';
import auth from './reducers/auth';
import { recipes, recipe } from './reducers/recipeReducers';
import favorites from './reducers/favoritesReducer';
import usersrecipes from './reducers/usersRecipesReducer';
import userDetailsReducer from './reducers/userDetailsReducer';
import { getPages } from './reducers/paginationReducer';
import ajaxStatusReducer from './reducers/ajaxStatusReducer';
import searchResult from './reducers/searchRecipeReducer';

export default combineReducers({
  auth,
  recipes,
  recipe,
  favorites,
  usersrecipes,
  userDetailsReducer,
  getPages,
  ajaxStatusReducer,
  searchResult
});
