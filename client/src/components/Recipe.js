import React, { Component } from 'react';

class Recipe extends Component {
  constructor(props){
    super(props);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleClick(e) {
    const recipeId = e.target.name;
    window.location = `/recipes/${recipeId}`
  }

  render() {
    return (
      <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img name={this.props.recipe.id} onClick={this.onHandleClick} src="./images/bg2.jpg" alt="props-img" />
          <span className="card-title">
            <b>{this.props.recipe.title}</b>
          </span>
          <a className="btn-floating halfway-fab waves-effect waves-light white "><i className="material-icons red-text">favorite_border</i></a>
        </div>
        <div className="card-content">
          <p>{this.props.recipe.description}</p>
        </div>
        <div className="card-action">
          <div className="row">
            <div className="col s12 m12">
              <div className="chip"><img src="./images/avi.jpg" alt="Contact Person" />{this.props.recipe.User.username}</div>
            </div>
            <div className="col s12 m12">
              <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100" data-tooltip="upvote"><i className="material-icons left">thumb_up</i>{this.props.recipe.upvotes}</a>
              <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100" data-tooltip="downvote"><i className="material-icons left">thumb_down</i>{this.props.recipe.downvotes}</a>
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