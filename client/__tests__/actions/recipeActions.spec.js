import expect from 'expect';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import mockAuthCheck from '../__mocks__/mockAuthCheck';
import mockItems from '../__mocks__/mockItems';
import {
  createRecipe, createRecipeFailure, createRecipeSuccess,
  upvoteRecipe, upvoteRecipeFailure, upvoteRecipeSuccess,
  downvoteRecipe, downvoteRecipeFailure, downvoteRecipeSuccess,
  fetchRecipes, fetchRecipesFailure, fetchRecipesSuccess,
  fetchSingleRecipe, fetchSingleRecipeFailure, fetchSingleRecipeSuccess,
  postReview, postReviewAction
} from '../../src/actions/recipeActions';
import {
  FETCH_RECIPES
} from '../../src/actions/recipeActions';

let store;
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('>>>> A C T I O N ---- recipeActions', () => {
  // beforeEach(() => {
  //   moxios.install();
  //   store = mockStore({});
  // });
  // afterEach(() => moxios.uninstall());
  // Create recipe
  it('should create an action to get all recipes', () => {
    const payload = {
      status: 'success',
      message: 'Recipes fetched successfully'
    };
    const expectedAction = {
      type: FETCH_RECIPES,
      payload: {
        status: 'success',
        message: 'Recipes fetched successfully'
      }
    };
    expect(fetchRecipes(payload)).toEqual(expectedAction);
  });
});
