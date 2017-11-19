import { connect } from 'react-redux';
import { fetchRecipes, fetchRecipesFailure, fetchRecipesSuccess, upvoteRecipe, upvoteRecipeFailure, upvoteRecipeSuccess } from '../actions/recipeActions';
import RecipeGrid from '../components/RecipeGrid';

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRecipes() {
            dispatch(fetchRecipes()).then((response) => {
                !response.error ? dispatch(fetchRecipesSuccess(response.payload.data.data)) : dispatch(fetchRecipesFailure(response.payload.error));
            });
        },

        upvoteRecipe(id, i) {
            dispatch(upvoteRecipe(id, i)).then((response) => {
                console.log(response.payload.response);
                (response.payload.response.data.status === 'success!') ? dispatch(upvoteRecipeSuccess(response.payload.data.message,i)) : dispatch(upvoteRecipeFailure(response.payload.response.data.message));
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeGrid);