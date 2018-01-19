
export function getPages (state = 1, action) {
  switch (action.type) {
    case 'FETCH_RECIPES':
      return state;
    case 'FETCH_RECIPES_SUCCESS':
      return action.pages;
    default:
       return state;
  }
}