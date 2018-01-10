import { connect } from 'react-redux';
import {
  upvoteRecipe, upvoteRecipeFailure, upvoteRecipeSuccess,
  downvoteRecipe, downvoteRecipeFailure, downvoteRecipeSuccess
} from '../actions/recipeActions';
import { addFavoriteRecipe } from '../actions/favoritesAction';
import Recipe from '../components/Recipe';
import index from 'redux-thunk';

const mapStateToProps = ( state, ownProps ) => {
	return { 
    recipes: state.recipes
	 };
}

const mapDispatchToProps = (dispatch) => {
  return {
    
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

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);