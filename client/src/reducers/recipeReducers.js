import {
  FETCH_RECIPES, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE,
  FETCH_SINGLE_RECIPE, FETCH_SINGLE_RECIPE_SUCCESS, FETCH_SINGLE_RECIPE_FAILURE,
  CREATE_RECIPE, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_FAILURE,
  UPVOTE_RECIPE, UPVOTE_RECIPE_FAILURE, UPVOTE_RECIPE_SUCCESS,
  DOWNVOTE_RECIPE, DOWNVOTE_RECIPE_FAILURE, DOWNVOTE_RECIPE_SUCCESS,
  DELETE_SINGLE_RECIPE, DELETE_SINGLE_RECIPE_FAILURE, DELETE_SINGLE_RECIPE_SUCCESS

} from '../actions/recipeActions';
/**
 * 
 * @param {*} state 
 * @param {*} action
 * @returns {object} -r 
 */
export function recipes(state = [], action) {
  let error;
  const { type, payload, recipes } = action;
  switch (type) {
    case FETCH_RECIPES:
      return [...state];
    case FETCH_RECIPES_SUCCESS:
      return [
        ...recipes
      ];
    case FETCH_RECIPES_FAILURE:
      // error = payload || { message: payload.message };
      return state;
    case CREATE_RECIPE:
      return [...state];
    case CREATE_RECIPE_SUCCESS:
      return [
        payload,
        ...state
      ];
    case CREATE_RECIPE_FAILURE:
      error = payload || { message: payload.message };
      return [...state];
    case DELETE_SINGLE_RECIPE:
      return [...state];
    case DELETE_SINGLE_RECIPE_SUCCESS:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case DELETE_SINGLE_RECIPE_FAILURE:
      return [
        ...state,
        error ];
    case UPVOTE_RECIPE:
      return [...state];
    case UPVOTE_RECIPE_SUCCESS:
      return [
        ...state.slice(0, action.payload.index), // before the one we are updating
        { ...state[action.payload.index],
          upvotes: action.payload.votes.upvotes,
          downvotes: action.payload.votes.downvotes
        },
        ...state.slice(action.payload.index + 1), // after the one we are updating
      ];
    case UPVOTE_RECIPE_FAILURE:
      error = action.error;
      return [...state];
    case DOWNVOTE_RECIPE:
      return [...state];
    case DOWNVOTE_RECIPE_SUCCESS:
      return [
        ...state.slice(0, action.payload.recipeIndex), // before the one we are updating
        { ...state[action.payload.recipeIndex],
          upvotes: action.payload.votesCount.upvotes,
          downvotes: action.payload.votesCount.downvotes },
        ...state.slice(action.payload.recipeIndex + 1), // after the one we are updating
      ];
    case DOWNVOTE_RECIPE_FAILURE:
      error = action.error;
      return [
        ...state,
        error
      ];
    default:
      return state;
  }
}

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns {object} response object
 */
export function recipe(state = { }, action) {
  let error;
  const { type, payload } = action;
  switch (type) {
    case FETCH_SINGLE_RECIPE:
      return state;
    case FETCH_SINGLE_RECIPE_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case FETCH_SINGLE_RECIPE_FAILURE:
      error = payload || { message: payload.message };
      return {
        state, recipe: null, error: error.message, loading: false
      };
    case 'POST_REVIEW':
      return {
        ...state,
        reviews: [
          payload,
          ...state.reviews]
      };
    default:
      return state;
  }
}
