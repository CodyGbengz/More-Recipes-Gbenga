import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';
import Paginate from './Pagination';
import Recipe from '../containers/RecipeContainer';

class RecipeGrid extends Component {
  renderRecipes(recipes) {
    if (!recipes || recipes.length <= 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12 m6 l4">
              <h5 className="center-align"><em>No recipes created yet!</em></h5>
            </div>
          </div>
        </div>
      );
    }
    return recipes.map((recipe, index) => (
      <div
      key={index}
      className="col xs12 s12 m6 l4">
        <Recipe
          isFavoritePage={this.props.isFavoritePage}
          recipe={recipe}
          index={index}
          downvoteRecipe={this.props.downvoteRecipe}
          upvoteRecipe={this.props.upvoteRecipe}
          deleteSingleRecipe={this.props.deleteSingleRecipe}
          editRecipe={this.props.editRecipe} />
      </div>
    ));
  }

  renderPaginationGrid(pages) {
    return (
      <div className='col s12 m12 l4 center-align offset-l4'>
        <Paginate
          id='paginate'
          onPageChange={ this.props.onPaginateClick }
          pageNumber={ pages }
        />
      </div>
    );
  }

  render() {
    const { pages, recipes, loading } = this.props;
    // if (loading) {
    //   return (
    //     <div className='sweet-loading'>
    //     <BarLoader
    //       color={'#123abc'}
    //       loading={loading}
    //     />
    //   </div>
    //   )
    // }
    // if (error) {
    //   return <div> { error }</div>
    // }
    return (
      <div className=''>
        <div className='row'>
          {this.renderRecipes(recipes)}
        </div>
        {this.props.pages > 1 &&
          <div className='row'>
            {this.renderPaginationGrid(pages)}
          </div>
        }
      </div>
    );
  }
}

export default RecipeGrid;
