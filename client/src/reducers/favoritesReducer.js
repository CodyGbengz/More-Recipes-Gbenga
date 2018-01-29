import {
  FETCH_FAVORITE_RECIPES,
  FETCH_FAV_RECIPES_SUCCESS,
  FETCH_FAV_RECIPES_FAILURE,
  ADD_FAVORITE_RECIPE,
  ADD_FAVORITE_FAILURE,
  ADD_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_RECIPE,
  // REMOVE_FAVORITE_RECIPE_FAILURE,
  REMOVE_FAVORITE_RECIPE_SUCCESS
} from '../actions/favoritesAction';

export default function favorites(state = [], action) {
  let error;
  const { type, favorites, recipeId } = action;
  switch (type) {
    case FETCH_FAVORITE_RECIPES:
      return [...state];
    case FETCH_FAV_RECIPES_SUCCESS:
      return favorites;
    case FETCH_FAV_RECIPES_FAILURE:
      // error = favorites;
      return [...state];
    case ADD_FAVORITE_RECIPE:
      return [...state];

    case ADD_FAVORITE_SUCCESS:
      return [
        action.favorite,
        ...state
      ];
    case ADD_FAVORITE_FAILURE:
    //  error = favorites || { message: favorites.message };
      return [...state];
    case REMOVE_FAVORITE_RECIPE:
      return [...state];
    case REMOVE_FAVORITE_RECIPE_SUCCESS:
      return [
        ...state.filter(favorite => favorite.recipeId !== recipeId)
      ];
    default:
      return state;
  }
}
