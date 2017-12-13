import { connect } from 'react-redux';
import { fetchRecipes, fetchRecipesFailure, fetchRecipesSuccess } from '../actions/recipeActions';
import { addFavoriteRecipe } from '../actions/favoritesAction';
import RecipeGrid from '../components/RecipeGrid';

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes() {
      dispatch(fetchRecipes()).then((response) => {
        !response.error ? 
        dispatch(fetchRecipesSuccess(response.payload.data.recipes)) : 
        dispatch(fetchRecipesFailure(response.payload.error));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeGrid);