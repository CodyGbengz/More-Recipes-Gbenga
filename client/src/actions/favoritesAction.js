import axios from 'axios';

//Recipes list
export const FETCH_FAVORITE_RECIPES = 'FETCH_FAVORITE_RECIPES';
export const FETCH_FAV_RECIPES_SUCCESS = 'FETCH_FAV_RECIPES_SUCCESS';
export const FETCH_FAV_RECIPES_FAILURE = 'FETCH_FAV_RECIPES_FAILURE';

export const fetchFavoriteRecipes = () => {
    const request = axios({
        method: 'get',
        url: '/api/users/favorites'
    });
    return {
        type: FETCH_FAVORITE_RECIPES,
        payload: request
    };
}

export const fetchFavRecipesSuccess = favorites => {
    return {
        type: FETCH_FAV_RECIPES_SUCCESS,
        favorites
    };
}

export const fetchFavRecipesFailure = payload => {
    return {
        type: FETCH_FAV_RECIPES_FAILURE,
        payload
    };
}