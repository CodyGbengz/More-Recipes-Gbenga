import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchUsersRecipes,
  fetchUsersRecipesFailure,
  fetchUsersRecipesSuccess,
  deleteSingleRecipe,
  deleteSingleRecipeSuccess,
  deleteSingleRecipeFailure,
  editRecipe,
  editRecipeFailure,
  editRecipeSuccess
} from '../actions/usersRecipesActions';
import RecipeGrid from '../components/RecipeGrid';
import UpdateRecipeForm from '../components/UpdateRecipeForm';


class UserRecipesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pages: 1
    };
    this.onPaginateClick = this.onPaginateClick.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount() {
    const offset = 5 * (this.state.currentPage - 1);
    this.props.fetchRecipes(offset);
  }

  onPaginateClick = (data) => {
    const { selected } = data;
    this.setState({ currentPage: selected + 1 }, () => {
      this.getRecipes();
    })
  }

  getRecipes() {
    const offset = 5 * (this.state.currentPage - 1);
    this.props.fetchRecipes(offset);
  }

  render() {
    const { recipes, pages, loading } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <h5>My Recipes</h5>
          <RecipeGrid
            recipes={ recipes }
            pages={ pages }
            onPaginateClick={ this.onPaginateClick }
            deleteSingleRecipe={ this.props.deleteSingleRecipe }
            editRecipe={ this.props.editRecipe }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.usersrecipes,
  pages: state.getPages
});

const mapDispatchToProps = dispatch => ({
  fetchRecipes(offset) {
    dispatch(fetchUsersRecipes(offset)).then((response) => {
      console.log(response.payload)
      response.payload.data.recipes ?
        dispatch(fetchUsersRecipesSuccess(response.payload.data.recipes.rows, response.payload.data.pages)) :
        dispatch(fetchUsersRecipesFailure(response.payload.error));
    });
  },
  deleteSingleRecipe(recipeId, index) {
    dispatch(deleteSingleRecipe(recipeId)).then((response) => {
      !response.error ?
        dispatch(deleteSingleRecipeSuccess(response.payload.data.message, index)) :
        dispatch(deleteSingleRecipeFailure(response.payload.error));
    });
  },
  editRecipe(recipe, index) {
    dispatch(editRecipe(recipe, index)).then((response) => {
      !response.error ?
        dispatch(editRecipeSuccess(response.payload.data, index)) :
        dispatch(editRecipeFailure(response.payload.error));
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipesContainer);
