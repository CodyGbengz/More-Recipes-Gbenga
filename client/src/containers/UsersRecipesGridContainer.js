import { connect } from 'react-redux';
import { fetchUsersRecipes, fetchUsersRecipesFailure, fetchUsersRecipesSuccess } from '../actions/usersRecipesActions';
import UsersRecipesGrid from '../components/UsersRecipesGrid';

const mapStateToProps = (state) => {
  return {
    usersrecipes: state.usersrecipes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersRecipes() {
      dispatch(fetchUsersRecipes()).then((response) => {
        !response.error ? 
        dispatch(fetchUsersRecipesSuccess(response.payload.data.recipes)) : 
        dispatch(fetchUsersRecipesFailure(response.payload.error));
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersRecipesGrid);