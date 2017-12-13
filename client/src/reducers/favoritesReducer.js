import {
  FETCH_FAVORITE_RECIPES, FETCH_FAV_RECIPES_SUCCESS, FETCH_FAV_RECIPES_FAILURE,
  ADD_FAVORITE_RECIPE, ADD_FAVORITE_FAILURE, ADD_FAVORITE_SUCCESS
} from '../actions/favoritesAction';

export default function favorites(state = { favorites: [], error: null, loading: false }, action) {
  let error;
  const { type, favorites } = action;
  console.log(action);
  switch (type) {
    case FETCH_FAVORITE_RECIPES:
      return {
        ...state, favorites: [], error: null, loading: true
      };
    case FETCH_FAV_RECIPES_SUCCESS:
      return {
        ...state, favorites: favorites, error: null, loading: false
      };
    case FETCH_FAV_RECIPES_FAILURE:
      error = favorites;
      return {
        ...state, favorites: [], error: error, loading: false
      };
    case ADD_FAVORITE_RECIPE:
      return {
        ...state, favorites: { ...state.favorites, loading: true }
      };

    case ADD_FAVORITE_SUCCESS:
      return {
        ...state, favorites: state.favorites.concat(favorites), error: null, loading: false
      };

    case ADD_FAVORITE_FAILURE:
      error = favorites || { message: favorites.message };
      return {
        ...state, favorites: { ...state.favorites, error: error, loading: false }
      };
    default:
      return state;
  }
}