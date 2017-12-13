import {
  FETCH_RECIPES, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE,
  FETCH_SINGLE_RECIPE, FETCH_SINGLE_RECIPE_SUCCESS, FETCH_SINGLE_RECIPE_FAILURE,
  CREATE_RECIPE, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_FAILURE,
  UPVOTE_RECIPE, UPVOTE_RECIPE_FAILURE, UPVOTE_RECIPE_SUCCESS,
  DOWNVOTE_RECIPE, DOWNVOTE_RECIPE_FAILURE, DOWNVOTE_RECIPE_SUCCESS

} from '../actions/recipeActions';

export function recipes(state = { recipes: [], error: null, loading: false }, action) {
  let error;
  const { type, payload } = action;
  switch (type) {
    case FETCH_RECIPES:
      return {
        ...state, recipes: [], error: null, loading: true
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state, recipes: payload, error: null, loading: false
      };
    case FETCH_RECIPES_FAILURE:
      error = payload || { message: payload.message };
      return {
        ...state, recipes: [], error: error, loading: false
      };
    case CREATE_RECIPE:
      return {
        ...state, recipes: { ...state.recipes, loading: true }
      };
    case CREATE_RECIPE_SUCCESS:
      return {
        ...state, recipes: state.recipes.concat(payload), error: null, loading: false
      };
    case CREATE_RECIPE_FAILURE:
      error = payload || { message: payload.message };
      return {
        ...state, recipes: { ...state.recipes, error: error, loading: false }
      };
    case UPVOTE_RECIPE:
      return {
        ...state, recipes: [...state.recipes], loading: true
      };
    case UPVOTE_RECIPE_SUCCESS:
      const newState = { ...state };
      const { index, votes } = action.payload;
      newState.recipes[index].upvotes = votes.recipe.upvotes;
      newState.recipes[index].downvotes = votes.recipe.downvotes;
      newState.loading = false;
      return newState;
    case UPVOTE_RECIPE_FAILURE:
      error = action.error;
      return {
        ...state, recipes: [...state.recipes], error: error, loading: false
      };
    case DOWNVOTE_RECIPE:
      return {
        ...state, recipes: [...state.recipes], loading: true
      };
    case DOWNVOTE_RECIPE_SUCCESS:
      const newWState = { ...state };
      const { recipeIndex, votesCount } = action.payload;
      newWState.loading = false;
      newWState.recipes[recipeIndex].downvotes = votesCount.recipe.downvotes;
      newWState.recipes[recipeIndex].upvotes = votesCount.recipe.upvotes;
      return newWState;
    case DOWNVOTE_RECIPE_FAILURE:
      error = action.error;
      return {
        ...state, recipes: [...state.recipes], error: error, loading: false
      };
    default:
      return state;
  }
}


export function recipe(state = { recipe: null, error: null, loading: false }, action) {
  let error;
  const { type, payload } = action;
  switch (type) {
    case FETCH_SINGLE_RECIPE:
      return {
        ...state, recipe: {}, error: null, loading: true
      };
    case FETCH_SINGLE_RECIPE_SUCCESS:
      return {
        ...state, recipe: payload, error: null, loading: false
      };
    case FETCH_SINGLE_RECIPE_FAILURE:
      error = payload || { message: payload.message };
      return {
        ...state, recipe: null, error: error.message, loading: false
      };
    case 'POST_REVIEW':
      const newState = { ...state };
      newState.recipe.reviews = state.recipe.reviews.concat(payload);
      return newState;
    default:
      return state;
  }
};
