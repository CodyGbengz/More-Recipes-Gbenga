import React, { Component } from 'react';
import { connect }  from 'react-redux';
import EditButton from '../components/EditButton';
import { editRecipe  } from '../actions/usersRecipesActions';

class EditButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.handleEditBtnClick = this.handleEditBtnClick.bind(this);
  };

  handleEditBtnClick(event) {
    this.props.editRecipe(this.props.recipe.id, this.props.index)
  };

  render() {
    return (
      <EditButton
        handleEditBtnClick={ this.handleEditBtnClick }
        recipe={ this.props.recipe }
        index={ this.props.index }
        />
    )
  }
};

const mapStateToProps = state => ({
  recipes: state.usersrecipes
});

export default connect( mapStateToProps, {
  editRecipe
})(EditButtonContainer);