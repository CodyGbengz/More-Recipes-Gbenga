import React, { Component } from 'react';
import Recipe from '../containers/RecipeContainer';

class UsersRecipesGrid extends Component {
  componentWillMount() {
    this.props.fetchUsersRecipes();
  }

  renderRecipes(recipes) {
    if (!recipes) {
      return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6 l4">
            <h2 className="center-align">No recipes found</h2>
          </div>
        </div>
      </div>
      )
    }
    return recipes.map((recipe, index) => {
      return (
        <div key={index} className="col s12 m6 l4">
         <div className="card">
          <div className="card-image">
            <img onClick={this.onHandleClick} src="./images/bg2.jpg" alt="props-img" />
            <span className="card-title">
              <b>{recipe.title}</b>
            </span>
            <a className="btn-floating halfway-fab waves-effect waves-light white "><i className="material-icons red-text">delete_forever</i></a>
          </div>
          <div className="card-content">
            <p>{recipe.description}</p>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s12 m12">
                <div className="chip"><img src="./images/avi.jpg" alt="Contact Person" />username</div>
              </div>
              <div className="col s12 m12">
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100" data-tooltip="upvote"><i className="material-icons left">thumb_up</i>{recipe.upvotes}</a>
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100" data-tooltip="downvote"><i className="material-icons left">thumb_down</i>{recipe.downvotes}</a>
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100 " data-tooltip="views"><i className="material-icons left">visibility</i>{recipe.views}</a>
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100 " data-tooltip="reviews"><i className="material-icons left">chat</i>1</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    });
  }

  render() {
    const { usersrecipes, loading, error} = this.props.usersrecipes;
    console.log(this.props)
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

    return (
      <div className='container'>
        <div className='row'>
        <h5>My Recipes</h5>
          { this.renderRecipes(usersrecipes) }
        </div>
      </div>
    )
  }
}

export default UsersRecipesGrid;
