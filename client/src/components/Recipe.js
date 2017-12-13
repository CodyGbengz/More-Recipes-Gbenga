import React, { Component } from 'react';
import { Link } from 'react-router';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.HandleClick = this.HandleClick.bind(this);
    this.onUpvote = this.onUpvote.bind(this);
    this.onDownvote = this.onDownvote.bind(this);
    this.handleAddFav = this.handleAddFav.bind(this);
    console.log(this.props);
  }

  HandleClick(e) {
    const recipeId = e.target.name;
    window.location = `/recipes/${recipeId}`
  }

  onUpvote(e) {

    this.props.upvoteRecipe(this.props.recipe.id, this.props.index);
  }

  onDownvote(e) {
    this.props.downvoteRecipe(this.props.recipe.id, this.props.index);
  }

  handleAddFav(e) {
    this.props.addFavoriteRecipe(this.props.recipe.id)
  }


  render() {
    return (
      <div className="col xs12 s12 m6 l3">
        <div className="card">
          <div className="card-image">
            <img
              name={this.props.recipe.id}
              onClick={this.HandleClick}
              src="/images/bg2.jpg"
              alt="props-img" />
            <a className="btn-floating halfway-fab waves-effect waves-light white" 
             onClick={this.handleAddFav} ><i className="material-icons red-text">favorite_border</i></a>
          </div>
          <div className="card-content">
           <Link to="recipes/1"><b>{this.props.recipe.title}</b></Link>
            <p>{this.props.recipe.description}</p>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s12 m12">
                <div className="chip"><img src="/images/avi.jpg" alt="Contact Person" />{this.props.recipe.User.username}</div>
              </div>
              <div className="col xs12 s12 m12">
                <a onClick={this.onUpvote} className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100" data-tooltip="upvote"><i className="material-icons left">thumb_up</i>{this.props.recipe.upvotes}</a>
                <a onClick={this.onDownvote} className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100" data-tooltip="downvote"><i className="material-icons left">thumb_down</i>{this.props.recipe.downvotes}</a>
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100 " data-tooltip="views"><i className="material-icons left">visibility</i>{this.props.recipe.views}</a>
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100 " data-tooltip="reviews"><i className="material-icons left">chat</i>{this.props.recipe.reviews.length}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Recipe;