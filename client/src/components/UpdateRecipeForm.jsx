import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux';
import { editRecipe } from '../actions/usersRecipesActions';
import EditButtonContainer from '../containers/EditButtonContainer';

const CLOUDINARY_UPLOAD_PRESET = 'lexglsms';
const CLOUDINARY_UPLOAD_URL = ' https://api.cloudinary.com/v1_1/myresources/image/upload';

class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      ingredients: '',
      directions: '',
      image_url: '',
      uploadedFile: [],
      recipe: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipe.title !== this.props.recipe.title) {
      const { title, description, directions, ingredients } = nextProps.recipe;
      this.setState({
        title,
        description,
        ingredients,
        directions,
      });
    }
  }


  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.state.image_url === '' ?
    this.setState({
      image_url: 'http://res.cloudinary.com/myresources/image/upload/v1515852046/bg2_pj1yit.jpg'
    }) :
    this.state.image_url;
    this.props.editRecipe(this.state, this.props.recipe.id, this.props.index);
    this.setState({
      title: '',
      description: '',
      ingredients: '',
      directions: '',
      image_url: '',
      uploadedFile: []
    });
  }
onImageDrop(files) {
  this.setState({
    uploadedFile: files[0]
  });
  this.handleImageUpload(files[0]);
}

handleImageUpload(file) {
  const upload = request.post(CLOUDINARY_UPLOAD_URL)
                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      .field('file', file);
  upload.end((err, response) => {
    if (err) {
    }

    if (response.body.secure_url !== '') {
      this.setState({
        image_url: response.body.secure_url
      });
    }
  });
}

  render() {
    const { title, description, ingredients, directions } = this.state;
    return (
      <form className="col s12" onSubmit={this.onSubmit}>
        <div className="row modal-form-row">
          <div className="input-field col s12 ">
            <input id="recipeTitle"
            value={title}
            onChange={this.onChange}
            name="title"
            placeholder="Title"
            type="text" />
            <label htmlFor="recipeTitle">Recipe Title</label>
          </div>
          <div className="input-field col s12 ">
            <input
            id="recipeDescription"
            value={description}
            onChange={this.onChange}
            className="materialize-textarea"
            name="description"
            type="text"/>
            <label htmlFor="recipeDescription">Recipe Description</label>
          </div>
          <div className="input-field col s12 m12">
            <h6><em><b>Upload Image</b></em></h6>
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
          </div>
          <div className="col s6 m6 l3">
            {this.state.image_url === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img
                className="responsive-img"
                src={this.state.image_url} />
              </div>}
          </div>
          <div className="file-field input-field col s12 m12">
            <h6><em><b>Ingredients</b></em></h6>
            <small><em>Enter your Ingredients one at a time and hit enter</em></small>
            <textarea
            id="ingredients"
            name="ingredients"
            value={ingredients}
            onChange={this.onChange}
            className="materialize-textarea"
            placeholder="e.g 1 tsp dry pepper" type="text"></textarea>
          </div>
          <div className="input-field col s12 m12">
            <h6><em><b>Directions</b></em></h6>
            <small><em>Enter your directions one step at a time and hit enter</em></small>
            <textarea
            className="materialize-textarea"
            name="directions"
            value={directions}
            onChange={this.onChange}
            id="directions"
            placeholder="e.g Place all ingredients in a blender" type="text"></textarea>
          </div>
          <div className="input-field col s12">
            <button
            className="btn waves-effect modal-close waves-light right white red-text"
            type="submit">
            Edit</button>
            <button
            type="button"
            className=
            "modal-action modal-close waves-effect waves-red red white-text btn-flat right">
            Cancel</button>
          </div>
        </div>
      </form>
    );
  }
}

RecipeForm.PropTypes = {
  editRecipe: PropTypes.func.isRequired
};


export default connect(null, { editRecipe })(RecipeForm);
