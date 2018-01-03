import {
    FETCH_USERS_RECIPES, 
    FETCH_USERS_RECIPES_SUCCESS, 
    FETCH_USERS_RECIPES_FAILURE,
  } from '../actions/usersRecipesActions';
  
  export default function usersRecipes(state = { usersrecipes: [], error: null, loading: false }, action) {
    let error;
    const { type, usersrecipes } = action;
    switch (type) {
      case FETCH_USERS_RECIPES:
        return {
          ...state, usersrecipes: [], error: null, loading: true
        };
      case FETCH_USERS_RECIPES_SUCCESS:
        return {
          ...state, usersrecipes: usersrecipes, error: null, loading: false
        };
      case FETCH_USERS_RECIPES_FAILURE:
        error = usersrecipes;
        return {
          ...state, usersrecipes: [], error: error, loading: false
        };
      default:
        return state;
    }
  }