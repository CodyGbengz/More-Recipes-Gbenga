import { connect } from 'react-redux';
import {
  fetchRecipes, fetchRecipesFailure, fetchRecipesSuccess,
  upvoteRecipe, upvoteRecipeFailure, upvoteRecipeSuccess,
  downvoteRecipe, downvoteRecipeFailure, downvoteRecipeSuccess
} from '../actions/recipeActions';
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
        dispatch(fetchRecipesSuccess(response.payload.data.data)) : 
        dispatch(fetchRecipesFailure(response.payload.error));
      });
    },

    upvoteRecipe(recipeId, index) {
      dispatch(upvoteRecipe(recipeId)).then((response) => {
        (!response.error) ? 
        dispatch(upvoteRecipeSuccess(response.payload.data, index)) : 
        dispatch(upvoteRecipeFailure(response.payload.response.data.message));
      });
    },

    downvoteRecipe(recipeId, index) {
      dispatch(downvoteRecipe(recipeId)).then((response) => {
        (!response.error) ? 
        dispatch(downvoteRecipeSuccess(response.payload.data, index)) : 
        dispatch(downvoteRecipeFailure(response.payload.response.data.message));
      });
    },

    addFavoriteRecipe(recipeId) {
      dispatch(addFavoriteRecipe(recipeId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeGrid);