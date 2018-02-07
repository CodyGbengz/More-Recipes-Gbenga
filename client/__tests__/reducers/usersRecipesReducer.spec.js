import expect from 'expect';
import reducer from '../../src/reducers/usersRecipesReducer';
import {
  FETCH_USERS_RECIPES,
  FETCH_USERS_RECIPES_SUCCESS,
  FETCH_USERS_RECIPES_FAILURE
} from '../../src/actions/usersRecipesActions';
import mockItems from '../__mocks__/mockItems';
// import { fetchRecipesSuccess } from '../../src/actions/recipeActions';

let initialState;
describe('Users recipe reducer', () => {
  beforeEach(() => {
    initialState = [];
  });
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
  it('should handle FETCH_USERS_RECIPES', () => {
    const fetchUserAction = {
      type: FETCH_USERS_RECIPES
    };
    expect(reducer([], fetchUserAction)).toEqual([]);
  });
  it('should handle FETCH_USERS_RECIPES_SUCCESS', () => {
    const fetchRecipesSuccess = {
      type: FETCH_USERS_RECIPES_SUCCESS,
      recipes: mockItems.recipeArray,
      pages: 1
    };
    expect(reducer(initialState, fetchRecipesSuccess)).toEqual(mockItems.recipeArray);
  });
  it('should handle FETCH_USERS_RECIPES_FAILURE', () => {
    const fetchRecipesFailure = {
      type: FETCH_USERS_RECIPES_FAILURE,
      error: 'an error occured while processing your request'
    };
    expect(reducer(initialState, fetchRecipesFailure)).toEqual([]);
  });
});
