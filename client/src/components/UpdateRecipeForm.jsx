import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editRecipe } from '../actions/usersRecipesActions';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      title: this.props.recipe,
      description: '',
      ingredients: '',
      directions: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.props);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.editRecipe(this.state);
  }

  render() {
    console.log(this.state, this.props);
    const { title, description, ingredients, directions } = this.state;
    return (
      <form className="col s12" onSubmit={this.onSubmit}>
        <div className="row modal-form-row">
          <div className="input-field col s12 ">
            <input id="recipeTitle" value={title} onChange={this.onChange} name="title" type="text" />
            <label htmlFor="recipeTitle">Recipe Title</label>
          </div>
          <div className="input-field col s12 ">
            <textarea id="recipeDescription" value={description} onChange={this.onChange} className="materialize-textarea" name="description" type="text"></textarea>
            <label htmlFor="recipeDescription">Recipe Description</label>
          </div>
          <div className="input-field col s12 m12">
            <h6><em><b>Upload Image</b></em></h6>
            <input className="waves-effect waves-light red-text white btn" type="file" />
          </div>
          <div className="file-field input-field col s12 m12">
            <h6><em><b>Ingredients</b></em></h6>
            <small><em>Enter your Ingredients one at a time and hit enter</em></small>
            <textarea id="ingredients" name="ingredients" value={ingredients} onChange={this.onChange} className="materialize-textarea" placeholder="e.g 1 tsp dry pepper" type="text"></textarea>
          </div>
          <div className="input-field col s12 m12">
            <h6><em><b>Directions</b></em></h6>
            <small><em>Enter your directions one step at a time and hit enter</em></small>
            <textarea className="materialize-textarea" name="directions" value={directions} onChange={this.onChange} id="directions" placeholder="e.g Place all ingredients in a blender" type="text"></textarea>
          </div>
          <div className="input-field col s12">
            <button className="modal-action modal-close waves-effect waves-red red white-text btn-flat right">Cancel</button>
            <button className="btn waves-effect modal-close waves-light right white red-text" type="submit">Save</button>
          </div>
        </div>
      </form>

    );
  }
}


export default connect(null, { editRecipe })(RecipeForm);
