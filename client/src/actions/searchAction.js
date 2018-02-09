import axios from 'axios';

export const SEARCH_RECIPES = 'SEARCH_RECIPES';
export const SEARCH_RECIPES_SUCCESS = 'SEARCH_RECIPES_SUCCESS';
export const CLEAR_SEARCH_RESULT = 'CLEAR_SEARCH_RESULT';

export const searchRecipeSuccess = searchResults => ({
  type: SEARCH_RECIPES_SUCCESS,
  searchResults
});

export const searchRecipe = (searchTerm) => {
  const request = axios({
    method: 'get',
    url: `/api/v1/recipes?search=${searchTerm}`
  });
  return dispatch =>
  request.then((res) => {
    console.log(res);
    dispatch(searchRecipeSuccess(res.data.recipes));
  }).catch((error) => {
    console.log(error);
    // dispatch(searchRecipeFailure(error))
  });
};

export const clearSearchResult = () => ({
  type: CLEAR_SEARCH_RESULT
});
