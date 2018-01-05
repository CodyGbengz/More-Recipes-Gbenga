import {
    FETCH_USERS_RECIPES, 
    FETCH_USERS_RECIPES_SUCCESS, 
    FETCH_USERS_RECIPES_FAILURE,
    DELETE_SINGLE_RECIPE,
    DELETE_SINGLE_RECIPE_FAILURE,
    DELETE_SINGLE_RECIPE_SUCCESS
  } from '../actions/usersRecipesActions';
  
  export default function usersRecipes(state = [ ] , action) {
    let error;
    const { type, usersrecipes } = action;
    switch (type) {
      case FETCH_USERS_RECIPES:
        return [ ...state ];
      case FETCH_USERS_RECIPES_SUCCESS:
        return [ 
                ...state,
                ...usersrecipes
              ];
      case FETCH_USERS_RECIPES_FAILURE:
        error = usersrecipes;
        return {
          ...state, usersrecipes: [], error: error, loading: false
        };
      case DELETE_SINGLE_RECIPE:
        return {
          ...state, usersrecipes: [], error: null, loading: true
        };
      case DELETE_SINGLE_RECIPE_SUCCESS:
        return {
          ...state, usersrecipes: usersrecipes, error: null, loading: false
        };
      case DELETE_SINGLE_RECIPE_FAILURE:
        return {
          ...state, usersrecipes: [], error: error, loading: false
        };
      default:
        return state;
    }
  }