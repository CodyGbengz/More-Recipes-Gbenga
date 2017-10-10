const INITIAL_STATE = { recipeList: [] };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FETCH_RECIPES':
         return {
             ...state, recipeList: action.recipes
         } 
         default:
         return state;
    }
}