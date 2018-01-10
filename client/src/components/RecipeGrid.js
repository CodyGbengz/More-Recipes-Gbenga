import React, { Component } from 'react';
import Recipe from '../containers/RecipeContainer';
import { upvoteRecipe } from '../actions/recipeActions';

class RecipeGrid extends Component {
 /* componentWillMount() {
    console.log(this.props);
    this.props.fetchRecipes();
    //this.props.fetchFavoriteRecipes();
  }
*/
  renderRecipes(recipes) {
    if (!recipes || recipes.length <= 0) {
      return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6 l4 ">
            <h5 className="center-align"><em>No recipes found</em></h5>
          </div>
        </div>
      </div>
      )
    }
    return recipes.map((recipe, index) => {
      return (
        <Recipe 
        recipe={ recipe }  
        key={ index } 
        index={ index }
        upvoteRecipe={ this.props.upvoteRecipe}
        deleteSingleRecipe={ this.props.deleteSingleRecipe }/>
        
      );
    });
  }

  render() {
    const { recipes }  = this.props;
    /*
    if (loading) {
      return (
      <div>
        <h1>Recipes</h1>
        <h3>loading...</h3>
      </div>
      )
    }
    if (error) {
      return <div> { error }</div>
    }
*/
    return (
      <div className=''>
        <div className='row'>
          { this.renderRecipes(recipes) }
        </div>
      </div>
    )
  }
}

export default RecipeGrid;
