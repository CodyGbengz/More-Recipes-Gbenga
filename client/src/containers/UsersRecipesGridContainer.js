import { connect } from 'react-redux';
import { 
  fetchUsersRecipes,
  fetchUsersRecipesFailure,
  fetchUsersRecipesSuccess,
  deleteSingleRecipe,
  deleteSingleRecipeSuccess,
  deleteSingleRecipeFailure
 } from '../actions/usersRecipesActions';
import RecipeGrid from '../components/RecipeGrid';

const mapStateToProps = (state) => {
  return {
    recipes: state.usersrecipes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes() {
      dispatch(fetchUsersRecipes()).then((response) => {
        !response.error ? 
        dispatch(fetchUsersRecipesSuccess(response.payload.data.recipes)) : 
        dispatch(fetchUsersRecipesFailure(response.payload.error));
      });
    },
    deleteSingleRecipe(recipeId) {
      dispatch(deleteSingleRecipe(recipeId)).then((response) => {
        !response.error ?
        dispatch(deleteSingleRecipeSuccess(response.payload.data.message)) :
        dispatch(deleteSingleRecipeFailure(response.payload.error))
      }); 
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeGrid);