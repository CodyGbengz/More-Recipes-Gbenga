import axios from 'axios';

// Users Recipes list
export const FETCH_USERS_RECIPES = 'FETCH_USERS_RECIPES';
export const FETCH_USERS_RECIPES_SUCCESS = 'FETCH_USERS_RECIPES_SUCCESS';
export const FETCH_USERS_RECIPES_FAILURE = 'FETCH_USERS_RECIPES_FAILURE';

export const fetchUsersRecipes = () => {
  const request = axios({
    method: 'get',
    url: '/api/v1/recipes/users'
  });
  return {
    type: FETCH_USERS_RECIPES,
    payload: request
  };
}

export const fetchUsersRecipesSuccess = usersrecipes => {
  return {
    type: FETCH_USERS_RECIPES_SUCCESS,
    usersrecipes
  };
}

export const fetchUsersRecipesFailure = payload => {
  return {
    type: FETCH_USERS_RECIPES_FAILURE,
    payload
  };
}


