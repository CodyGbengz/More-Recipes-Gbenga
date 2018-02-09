import {
  SEARCH_RECIPES, SEARCH_RECIPES_SUCCESS, CLEAR_SEARCH_RESULT
} from '../actions/searchAction';

const searchResult = (state = [], action) => {
  const { type, searchResults } = action;
  switch (type) {
    case SEARCH_RECIPES:
      return state;
    case SEARCH_RECIPES_SUCCESS:
      return searchResults;
    case CLEAR_SEARCH_RESULT:
      return [];
    default:
      return state;
  }
};

export default searchResult;
