import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes,
         fetchRecipesFailure, 
         fetchRecipesSuccess,
         upvoteRecipe, upvoteRecipeFailure, upvoteRecipeSuccess,
  downvoteRecipe, downvoteRecipeFailure, downvoteRecipeSuccess } from '../actions/recipeActions';
import { addFavoriteRecipe,
        fetchFavoriteRecipes,
      fetchFavRecipesFailure,
    fetchFavRecipesSuccess } from '../actions/favoritesAction';
import RecipeGrid from '../components/RecipeGrid';

class RecipesGridContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(this.props);
    this.props.fetchRecipes();
    this.props.fetchFavoriteRecipes();
  }
  render() {
    const { recipes } = this.props;
    return (
      <div className='container'>
        <div className='row'>
        <h5>Most Voted Recipes</h5>
          <RecipeGrid 
            recipes={this.props.recipes}
            upvoteRecipe={this.props.upvoteRecipe}
          />
        </div>
      </div>
    )
  }
}

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
    },
    fetchFavoriteRecipes: () => {
      dispatch(fetchFavoriteRecipes()).then((response) => {
        !response.error ? dispatch(fetchFavRecipesSuccess(response.payload.data.favourites)) : dispatch(fetchFavRecipesFailure(response.payload.response.data.message));
      });
    },
    upvoteRecipe(recipeId, index) {
      dispatch(upvoteRecipe(recipeId)).then((response) => {
        (!response.error) ?
          dispatch(upvoteRecipeSuccess(response.payload.data, index)) :
          dispatch(upvoteRecipeFailure(response.payload.response.data.message));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipesGridContainer);