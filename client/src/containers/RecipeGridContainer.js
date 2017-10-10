import { connect } from 'react-redux';
import { getRecipes } from '../actions/recipeActions';
import RecipeGrid from '../components/RecipeGrid';

const mapStateToProps = (state) => {
    return {
        recipes: state.recipeReducer.recipesList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRecipes: () => {
            dispatch(getRecipes()).then((res) => {
                console.log(res);
            });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(RecipeGrid);