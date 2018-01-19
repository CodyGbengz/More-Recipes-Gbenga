import { connect } from 'react-redux';
import Recipe from '../components/Recipe';
import index from 'redux-thunk';

const mapStateToProps = ( state, ownProps ) => {
	return { 
    recipes: state.recipes
	 };
}

export default connect(mapStateToProps, null)(Recipe);