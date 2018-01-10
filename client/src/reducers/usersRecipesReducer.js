import {
    FETCH_USERS_RECIPES, 
    FETCH_USERS_RECIPES_SUCCESS, 
    FETCH_USERS_RECIPES_FAILURE,
    DELETE_SINGLE_RECIPE,
    DELETE_SINGLE_RECIPE_FAILURE,
    DELETE_SINGLE_RECIPE_SUCCESS,
    CREATE_RECIPE_FAILURE,
    CREATE_RECIPE_SUCCESS,
    CREATE_RECIPE
  } from '../actions/usersRecipesActions';
  
  export default function usersRecipes(state = [ ] , action) {
    let error;
    const { type, usersrecipes, payload } = action;
    console.log(action)
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
        return [
          ...state ];
      case DELETE_SINGLE_RECIPE:
        return [ ...state ];
      case DELETE_SINGLE_RECIPE_SUCCESS:
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1) 
        ]
      case DELETE_SINGLE_RECIPE_FAILURE:
        return {
          ...state, usersrecipes: [], error: error, loading: false
        };
      case CREATE_RECIPE:
        return [ ...state ];
      case CREATE_RECIPE_SUCCESS:
        return [
        payload,
        ...state
      ];
    case CREATE_RECIPE_FAILURE:
     // error = payload || { message: payload.message };
      return [ ...state ];
      default:
        return state;
    }
  }