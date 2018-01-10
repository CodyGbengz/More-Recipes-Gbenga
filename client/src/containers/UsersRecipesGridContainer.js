import React, { Component } from 'react';
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

class UserRecipesContainer extends Component {
  constructor(props) {
    super(props);
    this.handleUpvote = this.handleUpvote.bind(this);
  }
  componentWillMount() {
    this.props.fetchRecipes();
    //this.props.fetchFavoriteRecipes();
  }

  handleUpvote(event) {
    this.props.upvoteRecipe(this.props.recipe.id, this.props.index);
  };

  render() {
    const { recipes } = this.props;
    return (
     <div className='container'>
      <div className='row'>
        <h5>My Recipes</h5>
        <RecipeGrid 
          recipes={ this.props.recipes }
          deleteSingleRecipe={ this.props.deleteSingleRecipe }
        />
      </div>
    </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.usersrecipes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes() {
      dispatch(fetchUsersRecipes()).then((response) => {
        response.payload.data.recipes ? 
        dispatch(fetchUsersRecipesSuccess(response.payload.data.recipes)) : 
        dispatch(fetchUsersRecipesFailure(response.payload.error));
      });
    },
    deleteSingleRecipe(recipeId, index) {
      dispatch(deleteSingleRecipe(recipeId)).then((response) => {
        !response.error ?
        dispatch(deleteSingleRecipeSuccess(response.payload.data.message, index)) :
        dispatch(deleteSingleRecipeFailure(response.payload.error))
      }); 
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipesContainer);