import RecipeDetails from '../components/RecipeDetails';
import { fetchSingleRecipe, fetchSingleRecipeSuccess, fetchSingleRecipeFailure } from '../actions/recipeActions';
import { connect } from 'react-redux';


const mapStateToProps = ( state, ownProps ) => {
	return { 
		recipe: state.recipe,
		Id: ownProps.id
	 };
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchSingleRecipe: (id) => {
			dispatch(fetchSingleRecipe(id)).then((response) => {
			console.log(response);
				if(response.payload.response && response.payload.response.status !== 200 ) {
					dispatch(fetchSingleRecipeFailure(response.payload.response.data));
				} else {
					dispatch(fetchSingleRecipeSuccess(response.payload.data.data))
				}
			});
		}
	}
}




export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
