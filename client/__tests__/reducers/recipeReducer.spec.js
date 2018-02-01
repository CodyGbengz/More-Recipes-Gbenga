import expect from 'expect';
import { recipes, recipe } from '../../src/reducers/recipeReducers';
import {
FETCH_RECIPES,
FETCH_RECIPES_FAILURE,
FETCH_RECIPES_SUCCESS,
FETCH_SINGLE_RECIPE,
FETCH_SINGLE_RECIPE_SUCCESS,
FETCH_SINGLE_RECIPE_FAILURE
} from '../../src/actions/recipeActions';
import mockItems from '../__mocks__/mockItems';

let initialState;
describe('Recipes reducer', () => {
  beforeEach(() => {
    initialState = [];
  });
  it('should return the initial state', () => {
    expect(recipes(undefined, {})).toEqual(initialState);
  });
  it('should return initial state for FETCH_RECIPES action', () => {
    const fetchRecipesAction = {
      type: FETCH_RECIPES
    };
    expect(recipes(initialState, fetchRecipesAction)).toEqual(initialState);
  });
  it('should handle FETCH_RECIPES_SUCCESS', () => {
    const fetchRecipesSuccess = {
      type: FETCH_RECIPES_SUCCESS,
      recipes: mockItems.recipeArray,
      pages: 1
    };
    expect(recipes(initialState, fetchRecipesSuccess)).toEqual([{
      description: 'This recipe is very popular in the south south part of Nigeria',
      directions: 'pour palm oil in pot, blanch oil for 10mins',
      id: 1,
      imageUrl: 'assets/images/pizza1.jpg',
      ingredients: 'palm kernel, assorted meat, maggi, palm oil',
      name: 'Banga Soup',
      userId: 1,
    },
    ]);
  });
  it('should handle FETCH_RECIPES_FAILURE', () => {
    const fetchRecipesFailure = {
      type: FETCH_RECIPES_FAILURE,
      error: 'an error occured while trying to process your request'
    };
    expect(recipes(initialState, fetchRecipesFailure)).toEqual([]);
  });
  it('should handle FETCH_SINGLE_RECIPE', () => {
    const fetchSingleRecipe = {
      type: FETCH_SINGLE_RECIPE
    };
    expect(recipe({}, fetchSingleRecipe)).toEqual({});
  });
  it('should handle FETCH_SINGLE_RECIPE_SUCCESS', () => {
    const fetchSingleRecipeSuccess = {
      type: FETCH_SINGLE_RECIPE_SUCCESS,
      recipe: {

      }
    };
    expect(recipe({}, fetchSingleRecipeSuccess)).toEqual({});
  });
  it('should handle FETCH_SINGLE_RECIPE_FAILURE', () => {
    const fetchSingleRecipeFailure = {
      type: FETCH_SINGLE_RECIPE_FAILURE,
      error: {
        message: 'an error occured while trying to process your request'
      }
    };
    expect(recipe({}, fetchSingleRecipeFailure)).toEqual({});
  });
});
