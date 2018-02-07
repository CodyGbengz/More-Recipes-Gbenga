import React, { Component } from 'react';
import { Link } from 'react-router';
import FavoriteButtonContainer from '../containers/FavoriteButtonContainer';
import UpvoteButtonContainer from '../containers/UpvoteButtonContainer';
import DownvoteButtonContainer from '../containers/DownvoteButtonContainer';
import DeleteButtonContainer from '../containers/DeleteButtonContainer';
import EditButton from './EditButton';
import UpdateRecipeForm from '../components/UpdateRecipeForm';


class Recipe extends Component {
  constructor(props){
    super(props)
    this.state={
      recipeIndex: 0,
      recipe: {},
      editClicked:false,
      recipes:[]
    }
  }

  componentDidMount(){
    $(document).ready(function(){
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();

    });
  }
  
  handleEdit = (props) => {
    const { index, recipe, recipes }= this.props;
    this.setState({
      recipeIndex: index,
      recipe,
      recipes,
    })
    $('#'+this.props.index).modal('open');
  }
  handleDeleteBtnClick = (props) => {
    const { index, recipe, recipes } = this.props;
    this.setState({
      recipeIndex: index,
      recipe,
      recipes,
    })
    this.props.deleteSingleRecipe(recipe.id, index);
  }

  handleDelete = (props) => {
    $('#'+ this.props.recipe.id).modal('open')
  }
  render() {
    const { hide, horizontal, recipe, index,} = this.props;
    return (
      <div>
      { this.props.recipe.Recipe && 
        <div 
        className={`card medium ${this.props.hide} ${this.props.horizontal}`}>
          <div className="card-image">
            <Link to={`recipes/${this.props.recipe.Recipe.id}`}>
              <img
                name={ this.props.recipe.id }
                src={ this.props.recipe.Recipe.image_url }
                alt="recipe image" />
            </Link>
          </div>
          <div className="card-content">
            <div className="row">
              <div className="col m10 s10 l10">
                <Link to={`recipes/${this.props.recipe.id}`}>
                  <b> { this.props.recipe.title || this.props.recipe.Recipe.title }</b></Link>
                <p>{ this.props.recipe.description || this.props.recipe.Recipe.description }</p>
              </div>
              <div className="col m2 s2 l2">
                <FavoriteButtonContainer
                  isFavoritePage={this.props.isFavoritePage}
                  index={this.props.index}
                  recipe={this.props.recipe}
                />
              </div>
              <div className="col s12 m12">
                <div className="chip">
                  <img src={ this.props.recipe.Recipe.User.image_url }
                    alt="Contact Person" />
                  {this.props.recipe.Recipe.User.username}
                </div>
              </div>
              <div className="col xs12 s12 m12">
                {
                  this.props.upvoteRecipe &&
                  <UpvoteButtonContainer
                    recipe={this.props.recipe}
                    index={this.props.index}
                  />
                }
                {
                  this.props.downvoteRecipe &&
                  <DownvoteButtonContainer
                    recipe={this.props.recipe}
                    index={this.props.index}
                  />
                }
                {
                  this.props.deleteSingleRecipe &&
                  <a
                    onClick={this.handleDelete}
                    data-position="bottom"
                    data-delay="100"
                    data-tooltip="edit"
                    data-target="edit">
                    <i className="material-icons edit">create</i>
                  </a>
                }
                {
                  this.props.editRecipe &&
                  <EditButton
                    handleEdit={this.handleEdit}
                    recipe={this.props.recipe}
                    index={this.props.index}
                  />
                }
                <span>
                  <a
                    className="waves-effect waves-light tooltipped"
                    data-position="bottom"
                    data-delay="100 "
                    data-tooltip="views">
                    <i className="material-icons left">visibility</i>
                  </a>
                  <span>{this.props.recipe.Recipe.views || 0}</span>
                </span>

                {this.props.recipe.reviews &&
                  <span>
                    <a
                      className="waves-effect waves-light tooltipped"
                      data-position="bottom"
                      data-delay="100 "
                      data-tooltip="reviews">
                      <i className="material-icons left">chat</i>
                    </a>
                    <span>{this.props.recipe.reviews.length}</span>
                  </span>
                }
              </div>
            </div>
          </div>
        </div> 
      }
      { !this.props.recipe.Recipe &&
        <div 
        className={`card medium ${this.props.hide} ${this.props.horizontal}`}>
          <div className="card-image">
            <Link to={`recipes/${this.props.recipe.id}`}>
              <img
                name={ this.props.recipe.id }
                src={ this.props.recipe.image_url || this.props.recipe.Recipe.image_url }
                alt="recipe image" />
            </Link>
          </div>
          <div className="card-content">
            <div className="row">
              <div className="col m10 s10 l10">
                <Link to={`recipes/${this.props.recipe.id}`}>
                  <b> { this.props.recipe.title || this.props.recipe.Recipe.title }</b></Link>
                <p>{ this.props.recipe.description || this.props.recipe.Recipe.description }</p>
              </div>
              <div className="col m2 s2 l2">
                <FavoriteButtonContainer
                  index={this.props.index}
                  recipe={this.props.recipe}
                />
              </div>
              <div className="col s12 m12">
                <div className="chip">
                  <img src={ this.props.recipe.User.image_url }
                    alt="Contact Person" />
                  {this.props.recipe.User.username}
                </div>
              </div>
              <div className="col xs12 s12 m12">
                {
                  this.props.upvoteRecipe &&
                  <UpvoteButtonContainer
                    recipe={this.props.recipe}
                    index={this.props.index}
                  />
                }
                {
                  this.props.downvoteRecipe &&
                  <DownvoteButtonContainer
                    recipe={this.props.recipe}
                    index={this.props.index}
                  />
                }
                {
                  this.props.deleteSingleRecipe &&
                  <span className="recipe-Icon">
                    <a
                      onClick={this.handleDelete}
                      data-position="bottom"
                      data-delay="100"
                      data-tooltip="delete"
                      data-target="delete">
                      <i className="material-icons">delete_forever</i>
                    </a>
                  </span>
                }
                {
                  this.props.editRecipe &&
                  <EditButton
                    handleEdit={this.handleEdit}
                    recipe={this.props.recipe}
                    index={this.props.index}
                  />
                }
                <span>
                  <a
                    className="recipe-icon waves-effect waves-light tooltipped"
                    data-position="bottom"
                    data-delay="100 "
                    data-tooltip="views">
                    <i className="material-icons left">visibility</i>
                  </a>
                  <span>{this.props.recipe.views || 0}</span>
                </span>

                {this.props.recipe.reviews &&
                  <span className="recipe-icon">
                    <a
                      className="waves-effect waves-light tooltipped"
                      data-position="bottom"
                      data-delay="100 "
                      data-tooltip="reviews">
                      <i className="material-icons left">chat</i>
                    </a>
                    <span>{this.props.recipe.reviews.length}</span>
                  </span>
                }
              </div>
            </div>
          </div>
        </div>
        }
        <div id={this.props.index} className="modal">
          <div className="modal-content">
            <h4>Edit Recipe</h4>
            <div className="row">
              <UpdateRecipeForm
                recipes={this.state.recipes}
                recipe={this.state.recipe}
                index={this.state.recipeIndex}
              />
            </div>
          </div>
        </div>
        <div id={this.props.recipe.id} className="modal">
          <div className="modal-content">
            <h4>Delete recipe</h4>
            <p>Are you sure you want to permanently delete recipe <em>{this.props.recipe.title}</em>?</p>
          </div>
          <div className="modal-footer">
          <DeleteButtonContainer
                    handleDeleteBtnClick={this.handleDeleteBtnClick}
                    recipe={this.props.recipe}
                    index={this.props.index}
                  />
            <a  className="modal-action modal-close waves-effect waves-green btn-flat red-text">no</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
