import {
  FETCH_USERS_RECIPES,
  FETCH_USERS_RECIPES_SUCCESS,
  FETCH_USERS_RECIPES_FAILURE,
  DELETE_SINGLE_RECIPE,
  DELETE_SINGLE_RECIPE_FAILURE,
  DELETE_SINGLE_RECIPE_SUCCESS,
  CREATE_RECIPE_FAILURE,
  CREATE_RECIPE_SUCCESS,
  CREATE_RECIPE,
  EDIT_RECIPE,
  EDIT_RECIPE_FAILURE,
  EDIT_RECIPE_SUCCESS
} from '../actions/usersRecipesActions';
/**
 *
 * @param {*} state
 * @param {*} action
 * @returns {object} response
 */
export default function usersRecipes(state = [], action) {
  let error;
  const { type, usersrecipes, payload, newRecipe, index } = action;
  switch (type) {
    case FETCH_USERS_RECIPES:
      return [...state];
    case FETCH_USERS_RECIPES_SUCCESS:
      return [
        ...usersrecipes
      ];
    case FETCH_USERS_RECIPES_FAILURE:
      error = usersrecipes;
      return [
        ...state];
    case DELETE_SINGLE_RECIPE:
      return [...state];
    case DELETE_SINGLE_RECIPE_SUCCESS:
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    case DELETE_SINGLE_RECIPE_FAILURE:
      return {
        state, usersrecipes: [], error, loading: false
      };
    case CREATE_RECIPE:
      return [...state];
    case CREATE_RECIPE_SUCCESS:
      return [
        payload,
        ...state
      ];
    case CREATE_RECIPE_FAILURE:
      // error = payload || { message: payload.message };
      return [...state];
    case EDIT_RECIPE:
      return [...state];
    case EDIT_RECIPE_SUCCESS:
      const updatedItems = state.map((item) => {
        if (item.id === newRecipe.id) {
          return { ...item, ...newRecipe };
        }
        return item;
      });
      return updatedItems;
    case EDIT_RECIPE_FAILURE:
      // error = payload || { message: payload.message };
      return [...state];
    default:
      return state;
  }
}
