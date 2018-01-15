import {
  FETCH_RECIPES, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE,
  FETCH_SINGLE_RECIPE, FETCH_SINGLE_RECIPE_SUCCESS, FETCH_SINGLE_RECIPE_FAILURE,
  CREATE_RECIPE, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_FAILURE,
  UPVOTE_RECIPE, UPVOTE_RECIPE_FAILURE, UPVOTE_RECIPE_SUCCESS,
  DOWNVOTE_RECIPE, DOWNVOTE_RECIPE_FAILURE, DOWNVOTE_RECIPE_SUCCESS

} from '../actions/recipeActions';

export function recipes(state = [], action) {
  let error;
  const { type, payload } = action;
  switch (type) {
    case FETCH_RECIPES:
      return [ ...state ];
    case FETCH_RECIPES_SUCCESS:
      return [ 
        ...payload 
      ];
    case FETCH_RECIPES_FAILURE:
     // error = payload || { message: payload.message };
      return state ;
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
    case UPVOTE_RECIPE:
      return [...state ];
    case UPVOTE_RECIPE_SUCCESS:
      const { index, votes } = action.payload;
      return [
        ...state.slice(0,index), // before the one we are updating
        { ...state[index], 
          upvotes: votes.upvotes,
          downvotes: votes.downvotes 
        },
        ...state.slice(index + 1), // after the one we are updating
      ]
    case UPVOTE_RECIPE_FAILURE:
      error = action.error;
      return [ ...state ];
    case DOWNVOTE_RECIPE:
      return [ ...state ];
    case DOWNVOTE_RECIPE_SUCCESS:
      const { recipeIndex, votesCount } = action.payload;
      return [
        ...state.slice(0,recipeIndex), // before the one we are updating
        { ...state[recipeIndex], 
          upvotes: votesCount.upvotes,
          downvotes: votesCount.downvotes },
        ...state.slice(recipeIndex + 1), // after the one we are updating
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


export function recipe(state = { }, action) {
  let error;
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case FETCH_SINGLE_RECIPE:
      return { ...state };
    case FETCH_SINGLE_RECIPE_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case FETCH_SINGLE_RECIPE_FAILURE:
      error = payload || { message: payload.message };
      return {
        ...state, recipe: null, error: error.message, loading: false
      };
    case 'POST_REVIEW':
      return {
        ...state,
        reviews: [payload, ...state.reviews]
      }
    default:
      return state;
  }