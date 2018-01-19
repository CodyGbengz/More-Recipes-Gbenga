import { connect } from 'react-redux';
import { fetchFavoriteRecipes, fetchFavRecipesFailure, fetchFavRecipesSuccess } from '../actions/favoritesAction';
import FavoritesGrid from '../components/FavoritesGrid';

const mapStateToProps = (state) => (
  {
    favorites: state.favorites
  });


const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavoriteRecipes: () => {
      dispatch(fetchFavoriteRecipes()).then((response) => {
        !response.error ? dispatch(fetchFavRecipesSuccess(response.payload.data.favourites)) : dispatch(fetchFavRecipesFailure(response.payload.response.data.message));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesGrid);