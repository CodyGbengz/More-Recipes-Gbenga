import React, { Component } from 'react';
import { Link } from 'react-router';
import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';
import UpvoteButtonContainer from '../containers/UpvoteButtonContainer';
import DownvoteButtonContainer from '../containers/DownvoteButtonContainer';
import DeleteButtonContainer from '../containers/DeleteButtonContainer';

class Recipe extends Component {
  constructor(props) {
    super(props);
   // this.handleUpvote = this.handleUpvote.bind(this);
    //this.handleDownvote = this.handleDownvote.bind(this);
    console.log(this.props);
  };
  render() {
    return (
      <div className="col xs12 s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <Link to={`recipes/${this.props.recipe.id}`}>
              <img
                name={this.props.recipe.id}
                src="/images/bg2.jpg"
                alt="recipe image"/>
            </Link>
            <FavoriteButtonContainer 
            index={this.props.index} 
            recipe={ this.props.recipe } />
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
              { 
                this.props.upvoteRecipe &&
                <UpvoteButtonContainer
                  recipe={this.props.recipe}
                  index={ this.props.index}
                  />
              }
              { 
                this.props.downvoteRecipe &&
                <DownvoteButtonContainer
                  recipe={this.props.recipe}
                  index={ this.props.index}
                  />
              }
              {
                this.props.deleteSingleRecipe &&
                <DeleteButtonContainer
                  recipe={this.props.recipe}
                  index={this.props.index}
                  />
              }

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