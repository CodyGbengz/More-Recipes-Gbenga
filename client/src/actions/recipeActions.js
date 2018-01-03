import axios from 'axios';
import store from '../store';

//Recipes list
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';

//create a recipe
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS';
export const CREATE_RECIPE_FAILURE = 'CREATE_RECIPE_FAILURE'

//fetch single recipe
export const FETCH_SINGLE_RECIPE = 'FETCH_SINGLE_RECIPE';
export const FETCH_SINGLE_RECIPE_SUCCESS = 'FETCH_SINGLE_RECIPE_SUCCESS';
export const FETCH_SINGLE_RECIPE_FAILURE = 'FETCH_SINGLE_RECIPE_FAILURE';

// 
export const POST_REVIEW = 'POST_REVIEW';

// upvote recipe 
export const UPVOTE_RECIPE = 'UPVOTE_RECIPE';
export const UPVOTE_RECIPE_SUCCESS = 'UPVOTE_RECIPE_SUCCESS';
export const UPVOTE_RECIPE_FAILURE = 'UPVOTE_RECIPE_FAILURE';

// downvote recipe
export const DOWNVOTE_RECIPE = 'DOWNVOTE_RECIPE';
export const DOWNVOTE_RECIPE_SUCCESS = 'DOWNVOTE_RECIPE_SUCCESS';
export const DOWNVOTE_RECIPE_FAILURE = 'DOWNVOTE_RECIPE_FAILURE';

const BASE_URL = '/api/v1/';

export const downvoteRecipe = recipeId => {
  const request = axios({
    method: 'put',
    url: `${BASE_URL}recipes/${recipeId}/downvote`
  });
  return {
    type: DOWNVOTE_RECIPE,
    payload: request
  };
};

export const downvoteRecipeSuccess = (votesCount, recipeIndex) => {
  return {
    type: DOWNVOTE_RECIPE_SUCCESS,
    payload: { recipeIndex, votesCount }
  };
};

export const downvoteRecipeFailure = error => {
  return {
    type: DOWNVOTE_RECIPE_FAILURE,
    error
  };
};

export const upvoteRecipe = recipeId => {
  const request = axios({
    method: 'put',
    url: `${BASE_URL}recipes/${recipeId}/upvote`
  });
  return {
    type: UPVOTE_RECIPE,
    payload: request
  };
};

export const upvoteRecipeSuccess = (votes, index) => {
  return {
    type: UPVOTE_RECIPE_SUCCESS,
    payload: { index, votes }
  };
};

export const upvoteRecipeFailure = error => {
  return {
    type: UPVOTE_RECIPE_FAILURE,
    error
  };
};

export const fetchRecipes = () => {
  const request = axios({
    method: 'get',
    url: `${BASE_URL}recipes`
  });
  return {
    type: FETCH_RECIPES,
    payload: request
  };
};

export const fetchRecipesSuccess = recipes => {
  return {
    type: FETCH_RECIPES_SUCCESS,
    payload: recipes
  };
};

export const fetchRecipesFailure = error => {
  return {
    type: FETCH_RECIPES_FAILURE,
    payload: error
  };
};

export const fetchSingleRecipe = id => {
  const request = axios({
    method: 'get',
    url: `${BASE_URL}recipes/${id}`
  });
  return {
    type: FETCH_SINGLE_RECIPE,
    payload: request
  };
};

export const fetchSingleRecipeSuccess = recipe => {
  return {
    type: FETCH_SINGLE_RECIPE_SUCCESS,
    payload: recipe
  };
};

export const fetchSingleRecipeFailure = error => {
  return {
    type: FETCH_SINGLE_RECIPE_FAILURE,
    payload: error
  };
};


export const createRecipe = recipe => {
  const request = axios({
    method: 'post',
    data: recipe,
    url: `${BASE_URL}recipes`
  });
  return dispatch => {
    return request.then(res => {
      dispatch(createRecipeSuccess(res.data.recipe))
    })
  };
};

export const createRecipeSuccess = newRecipe => {
  const currentState = store.getState()
  const User = currentState.auth.user
  newRecipe.reviews = [];
  newRecipe.User = {
    username: User.username
  };
  return {
    type: CREATE_RECIPE_SUCCESS,
    payload: newRecipe
  };
};

export const createRecipeFailure = error => (
  {
    type: CREATE_RECIPE_FAILURE,
    payload: error
  });


export const postReview = review => (
  {
    type: POST_REVIEW,
    payload: review
  });

export function postReviewAction(id, review) {
  return dispatch => (
    axios.post(`${BASE_URL}recipes/${id}/reviews`, { content: review })
      .then((res) => {
        const currentState = store.getState();
        const User = currentState.auth.user;
        res.data.data.User = {
          id: User.id,
          username: User.username,
          createdAt: new Date()
        };
        dispatch(postReview(res.data.data));
      })
  )
}







