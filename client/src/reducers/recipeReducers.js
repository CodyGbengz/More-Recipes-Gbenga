
export function recipes (state = [ ], action) {
    switch(action.type) {
        case 'FETCH_RECIPES':
         return {
             ...state, recipes: action.recipes
         }
        default:
         return state;
    }
}


export function recipe(state = {}, action) {
    switch(action.type) {
        case 'FETCH_SINGLE_RECIPE': 
          return {...state , recipe: action.recipe}
        default:
         return state;
    }
}