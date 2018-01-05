import React, { Component } from 'react';
import Recipe from '../containers/RecipeContainer';

class RecipeGrid extends Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }

  renderRecipes(recipes) {
    if (!recipes) {
      return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6 l4 ">
            <h2 className="center-align">No recipes found</h2>
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
        index={ index } />
      );
    });
  }

  render() {
    console.log(this.props)
    const recipes = this.props.recipes;
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
       { console.log(recipes,'here')}
          { this.renderRecipes(recipes) }
        </div>
      </div>
    )
  }
}

export default RecipeGrid;
