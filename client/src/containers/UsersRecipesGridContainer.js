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
  componentWillMount() {
    this.props.fetchRecipes();
    console.log(this.props)
    //this.props.fetchFavoriteRecipes();
  };

  render() {
    console.log(this.props);
    const { recipes } = this.props;
    return (
     <div className='container'>
      <div className='row'>
        <h5>My Recipes</h5>
        <RecipeGrid 
          recipes={ this.props.recipes }
          deleteSingleRecipe={ this.props.deleteSingleRecipe }
          editRecipe={ this.props.editRecipe }
        />
      </div>
      <div id="edit" className="modal">
            <div className="modal-content">
              <h4>Edit Recipe</h4>
              <div className="row">
                <UpdateRecipeForm id={ this.props.id } />
              </div>
            </div>
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
    },
    editRecipe(recipe, index) {
      dispatch(editRecipe(recipe, index)).then((response) => {
        !response.error ?
        dispatch(editRecipeSuccess(response.payload.data, index)) :
        dispatch(editRecipeFailure(response.payload.error))
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipesContainer);