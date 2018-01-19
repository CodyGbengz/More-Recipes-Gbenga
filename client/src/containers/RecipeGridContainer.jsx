import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes,
  fetchRecipesFailure,
  fetchRecipesSuccess,
  upvoteRecipe, upvoteRecipeFailure, upvoteRecipeSuccess,
  downvoteRecipe, downvoteRecipeFailure, downvoteRecipeSuccess } from '../actions/recipeActions';
import {
  fetchFavoriteRecipes,
  fetchFavRecipesFailure,
  fetchFavRecipesSuccess } from '../actions/favoritesAction';
import RecipeGrid from '../components/RecipeGrid';

class RecipesGridContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    }
    this.onPaginateClick = this.onPaginateClick.bind(this);
  }
  componentDidMount() {
    const offset = 5 * (this.state.currentPage - 1)
    this.props.fetchRecipes(offset);
    this.props.fetchFavoriteRecipes();
  }

  onPaginateClick(page) {
    this.setState({ currentPaginatePage: page }, () => {
      this.getRecipes();
    })
  }

  getRecipes() {
    const offset = 5 * (this.state.currentPage - 1);
    this.props.fetchRecipes(offset);
  }
  render() {
    const { recipes, pages } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <h5>Most Voted Recipes</h5>
          <RecipeGrid
            recipes={ recipes }
            pages={ pages }
            onPaginateClick={this.onPaginateClick}
            currentPage={ this.state.currentPage}
            upvoteRecipe={ this.props.upvoteRecipe}
            downvoteRecipe={ this.props.downvoteRecipe}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  pages: state.getPages
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes() {
    dispatch(fetchRecipes()).then((response) => {
      !response.error ?
        dispatch(fetchRecipesSuccess(response.payload.data.recipes.rows,response.payload.data.pages)) :
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
  },
  downvoteRecipe(recipeId, index) {
    dispatch(downvoteRecipe(recipeId)).then((response) => {
      (!response.error) ?
        dispatch(downvoteRecipeSuccess(response.payload.data, index)) :
        dispatch(downvoteRecipeFailure(response.payload.response.data.message));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipesGridContainer);
