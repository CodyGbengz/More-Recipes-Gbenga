import {
    FETCH_FAVORITE_RECIPES, FETCH_FAV_RECIPES_SUCCESS, FETCH_FAV_RECIPES_FAILURE
} from '../actions/favoritesAction';

export function favorites (state = { favorites: [], error: null, loading: false }, action) {
    let error;
    const { type, favorites} = action;
    switch(type) {

        case FETCH_FAVORITE_RECIPES:
         return {
             ...state, favorites: [], error: null, loading: true 
         };
        case FETCH_FAV_RECIPES_SUCCESS:
        console.log(action.favorites);
         return { 
             ...state, favorites: favorites, error: null, loading: false  
            };
        case FETCH_FAV_RECIPES_FAILURE:
          error = favorites;
          return {
              ...state, favorites: [], error: error, loading: false 
          }
          /*
        case CREATE_RECIPE:
          return {
              ...state, recipes: {...state.recipes, loading: true}
        }
        case CREATE_RECIPE_SUCCESS:
           return { 
            ...state, recipes: state.recipes.concat(payload), error: null, loading: false  
        }
        case CREATE_RECIPE_FAILURE:
        error = payload || {message: payload.message};
            return {...state, recipes: {...state.recipes, error:error, loading: false}
        }*/
        default:
         return state;
    }
}