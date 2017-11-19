import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeGrid extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  renderRecipes(recipes) {
    if (!recipes) {
      return (
      <div class="container">
        <div class="row">
          <div className="col s12 m6 l4 ">
            <h2 className="center-align">No recipes found</h2>
          </div>
        </div>
      </div>
      )
    }
    return recipes.map((recipe, i) => {
      return (
        <Recipe upvoteRecipe={this.props.upvoteRecipe} recipe={recipe} key={i} i={i} />
      );
    });
  }

  render() {
    const { recipes, loading, error} = this.props.recipes;
    console.log(recipes);
    if (loading) {
      return (
      <div>
        <h1>Recipes</h1>
        <h3>loading...</h3>
        </div>
      )
    }
    if (error) {
      return <div> {error}</div>
    }

    return (
      <div className=''>
        <div className='row'>
          {this.renderRecipes(recipes)}
        </div>
      </div>
    )
  }
}

export default RecipeGrid;
