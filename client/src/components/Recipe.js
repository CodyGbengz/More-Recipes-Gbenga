import React, { Component } from 'react';
import { Link } from 'react-router';
import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';
import UpvoteButtonContainer from '../containers/UpvoteButtonContainer';
import DownvoteButtonContainer from '../containers/DownvoteButtonContainer';
import DeleteButtonContainer from '../containers/DeleteButtonContainer';
import EditButton from './EditButton';
import UpdateRecipeForm from '../components/CreateRecipeForm';


class Recipe extends Component {
  render() {
    return (
      <div>
        <div className="col xs12 s12 m6 l4">
          <div className="card">
            <div className="card-image">
              <Link to={`recipes/${this.props.recipe.id}`}>
                <img
                  name={this.props.recipe.id}
                  src="http://res.cloudinary.com/myresources/image/upload/v1515852046/bg2_pj1yit.jpg"
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
                  <div className="chip"><img src="http://res.cloudinary.com/myresources/image/upload/v1515852440/avi_so66tc.jpg" alt="Contact Person" />{this.props.recipe.User.username}</div>
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
                  {
                    this.props.editRecipe &&
                <EditButton
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
        <div id="edit" className="modal">
          <div className="modal-content">
            <h4>Edit Recipe</h4>
            <div className="row">
              <UpdateRecipeForm recipe={this.props.recipe}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
