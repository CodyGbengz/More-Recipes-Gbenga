/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns {object} state 
 */
export default function review(state = { }, action) {
  switch (action.type) {
    case 'POST_REVIEWS':
      return state.recipe.recipe.recipe.reviews.concat(action.review);
    default:
      return state;
  }
}
