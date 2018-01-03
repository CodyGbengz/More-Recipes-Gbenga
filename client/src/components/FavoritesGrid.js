import React, { Component } from 'react';
import Header from './Header';

class FavoritesGrid extends Component {
  componentWillMount() {
      console.log(this.props);
    this.props.fetchFavoriteRecipes();
  }

  renderRecipes(recipes) {
    if (!recipes) {
      return (
      <div class="container">
        <div class="row">
          <div className="col s12 m6 l4 ">
            <h5 className="center-align"><em>No recipes found</em></h5>
          </div>
        </div>
      </div>
      )
    }
    return recipes.map((recipe, i) => {
      return (
        <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <img name={recipe.Recipe.id} onClick={this.onHandleClick} src="./images/bg2.jpg" alt="props-img" />
            <span className="card-title">
              <b>{recipe.Recipe.title}</b>
            </span>
            <a className="btn-floating halfway-fab waves-effect waves-light white "><i className="material-icons red-text">delete_forever</i></a>
          </div>
          <div className="card-content">
            <p>{recipe.Recipe.description}</p>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s12 m12">
                <div className="chip"><img src="./images/avi.jpg" alt="Contact Person" />{recipe.User.username}</div>
              </div>
              <div className="col s12 m12">
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100" data-tooltip="upvote"><i className="material-icons left">thumb_up</i>{recipe.Recipe.upvotes}</a>
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100" data-tooltip="downvote"><i className="material-icons left">thumb_down</i>{recipe.Recipe.downvotes}</a>
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100 " data-tooltip="views"><i className="material-icons left">visibility</i>{recipe.Recipe.views}</a>
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
    const { favorites, loading, error } = this.props.favorites;
    if (loading) {
      return (
      <div>
        <h3>loading...</h3>
      </div>
      )
    } else if (error) {
      return <div> Error : {error}</div>
    }

    return (
      <div className='container'>
        <div className='row'>
        <h5>My Favorite Recipes</h5>
          {this.renderRecipes(favorites)}
        </div>
      </div>
    )
  }
}

export default FavoritesGrid;
