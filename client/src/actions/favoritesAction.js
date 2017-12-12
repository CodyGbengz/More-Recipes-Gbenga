import axios from 'axios';

//Recipes list
export const FETCH_FAVORITE_RECIPES = 'FETCH_FAVORITE_RECIPES';
export const FETCH_FAV_RECIPES_SUCCESS = 'FETCH_FAV_RECIPES_SUCCESS';
export const FETCH_FAV_RECIPES_FAILURE = 'FETCH_FAV_RECIPES_FAILURE';

// add to favorites
export const ADD_FAVORITE_RECIPE = 'ADD_FAVORITE_RECIPE';
export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS';
export const ADD_FAVORITE_FAILURE = 'ADD_FAVORITE_FAILURE';

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

export const addFavoriteRecipe = recipeId => {
  const request = axios({
    method: 'post',
    url: `/api/users/${recipeId}/favorites`
  });
  return dispatch => (request.then(res => dispatch(addFavoriteSuccess(res.data.recipe))));
}

export const addFavoriteSuccess = favorite => {
  return {
    type: ADD_FAVORITE_SUCCESS,
    payload: favorite
  };
};

export const addFavoriteFailure = error => {
  return {
    type: ADD_FAVORITE_FAILURE,
    payload: error
  };
};
