import {
    FETCH_RECIPES, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE,
    FETCH_SINGLE_RECIPE, FETCH_SINGLE_RECIPE_SUCCESS, FETCH_SINGLE_RECIPE_FAILURE,
    CREATE_RECIPE, CREATE_RECIPE_SUCCESS, CREATE_RECIPE_FAILURE
} from '../actions/recipeActions';

export function recipes (state = { recipes: [], error: null, loading: false }, action) {
    let error;
    const { type, payload} = action;
    switch(type) {

        case FETCH_RECIPES:
         return {
             ...state, recipes: [], error: null, loading: true 
         };
        case FETCH_RECIPES_SUCCESS:
         return { 
             ...state, recipes: payload, error: null, loading: false  
            };
        case FETCH_RECIPES_FAILURE:
          error = payload || { message : payload.message };
          return {
              ...state, recipes: [], error: error, loading: false 
          }
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
        }
        default:
         return state;
    }
}


export function recipe(state = { recipe: null, error: null, loading: false} , action) {
    let error;
    const { type, payload} = action;
    switch(type) {
        case FETCH_SINGLE_RECIPE: 
          return {
              ...state , recipe: { } , error: null, loading: true 
        };
        case FETCH_SINGLE_RECIPE_SUCCESS:
        console.log(payload)
          return {
              ...state, recipe: payload, error: null, loading: false 
        };
        case FETCH_SINGLE_RECIPE_FAILURE:
          error = payload || { message: payload.message };
          return { 
              ...state, [recipe]: { recipe: null, error: error, loading: false }
        };
        case 'POST_REVIEW':
        const newState = { ...state };
        newState.recipe.reviews = state.recipe.reviews.concat(payload)
        return newState
        default:
         return state;
    }
}

/*
export function create(state = [], action) {
    let error;
    const { type, payload } =  action;
    switch(type) {
        case CREATE_RECIPE:
            return {...state, recipes: {...state.recipes, loading: true}
        }
        case CREATE_RECIPE_SUCCESS:
        const recipes = Object.assign({}, state.recipes.recipes);
        recipes.recipes = recipes.recipes.concat(payload)
            return { recipes }; 
        case CREATE_RECIPE_FAILURE:
        error = payload || {message: payload.message};
            return {...state, recipesList: {...state.recipesList, error:error, loading: false}
        }
        default:
            return state;
    }
}
*/


