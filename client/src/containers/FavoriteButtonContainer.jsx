import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addFavoriteRecipe,
  removeFavoriteRecipe } from '../actions/favoritesAction';
import FavoritesButton from '../components/FavoriteButton';

class FavoriteButtonContainer extends Component {
  constructor(props) {
    super(props);
    // this.toggleFavorite = this.toggleFavorite.bind(this)
    this.state = {
      favorites: this.props.favorites,
    };
  }

  componentDidMount = () => {
    this.isUserFavorite();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.favorites !== nextProps.favorites) {
      this.setState({ favorites: nextProps.favorites });
    }
  }



  handleFavBtnClick = (event) => {
    event.preventDefault();
    if (!this.isUserFavorite()) {
      this.props.addFavoriteRecipe(this.props.recipe.id, this.props.index);
    } else {
      this.props.removeFavoriteRecipe(this.props.recipe.id, this.props.index);
    }
  }

  isUserFavorite = () => {
    const isFavorite = this.state.favorites.filter(favorite => favorite.recipeId === this.props.recipe.id);
    if (isFavorite.length > 0) {
      return true;
    }
    return false;
  }

  render() {
    const { recipe } = this.props;
    return (
      <FavoritesButton
      isUserFavorite={ this.isUserFavorite }
        handleFavBtnClick={ this.handleFavBtnClick }
      />
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps, {
  addFavoriteRecipe,
  removeFavoriteRecipe
})(FavoriteButtonContainer);
