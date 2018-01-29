import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFavoriteRecipes, fetchFavRecipesFailure, fetchFavRecipesSuccess } from '../actions/favoritesAction';
import FavoritesGrid from '../components/FavoritesGrid';
import RecipeGrid from '../components/RecipeGrid';

class FavoritesContainer extends Component {
  componentDidMount() {
    this.props.fetchFavoriteRecipes();
  }

  render() {
    const { favorites } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <h5>My Favorites</h5>
          <RecipeGrid
          recipes={ favorites }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites
});


const mapDispatchToProps = dispatch => ({
  fetchFavoriteRecipes: () => {
    dispatch(fetchFavoriteRecipes()).then((response) => {
      !response.error ?
      dispatch(fetchFavRecipesSuccess(response.payload.data.favourites)) :
      dispatch(fetchFavRecipesFailure(response.payload.response.data.message));
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
