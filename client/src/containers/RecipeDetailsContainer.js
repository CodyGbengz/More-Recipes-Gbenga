import RecipeDetails from '../components/RecipeDetails';
import { getSingleRecipe } from '../actions/recipeActions';
import { connect } from 'react-redux';


const mapStateToProps = ( state, ownProps ) => {
	const { recipe }  = state;

	return { 
		recipe,
		Id: ownProps.id
	 };
}

const mapDispatchToProps = (dispatch) => {
	return {
		getSingleRecipe: (id) => {
			dispatch(getSingleRecipe(id))
		}
	}
}




export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
