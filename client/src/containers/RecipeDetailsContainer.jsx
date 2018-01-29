import { connect } from 'react-redux';
import React, { Component } from 'react';
import RecipeDetails from '../components/RecipeDetails';
import {
  fetchSingleRecipe, fetchSingleRecipeSuccess, fetchSingleRecipeFailure,
  upvoteRecipe, upvoteRecipeFailure, upvoteRecipeSuccess,
  downvoteRecipe, downvoteRecipeFailure, downvoteRecipeSuccess } from '../actions/recipeActions';

class RecipeDetailsContainer extends Component {
  constructor() {
    super();
    this.state = {
      recipe: {}
    };
  }
  componentDidMount() {
    this.props.fetchSingleRecipe(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.recipe) {
      this.setState({
        recipe: nextProps.recipe,
      });
    }
  }
  render() {
    const { recipe } = this.state;
    return (
  <RecipeDetails
  recipe={ recipe }
  upvoteRecipe= {this.props.upvoteRecipe}
  downvoteRecipe={this.props.downvoteRecipe}
  />
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipe,
  Id: ownProps.id
});

const mapDispatchToProps = dispatch => ({
  fetchSingleRecipe: (id) => {
    dispatch(fetchSingleRecipe(id)).then((response) => {
      if (response.payload.response && response.payload.response.status !== 200) {
        dispatch(fetchSingleRecipeFailure(response.payload.response.data));
      } else {
        dispatch(fetchSingleRecipeSuccess(response.payload.data.recipe));
      }
    });
  },
  upvoteRecipe(recipeId, index) {
    dispatch(upvoteRecipe(recipeId)).then((response) => {
      (!response.error) ?
        dispatch(upvoteRecipeSuccess(response.payload.data, index)) :
        dispatch(upvoteRecipeFailure(response.payload.response.data.message));
    });
  },
  downvoteRecipe(recipeId, index) {
    dispatch(downvoteRecipe(recipeId)).then((response) => {
      (!response.error) ?
        dispatch(downvoteRecipeSuccess(response.payload.data, index)) :
        dispatch(downvoteRecipeFailure(response.payload.response.data.message));
    });
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailsContainer);
