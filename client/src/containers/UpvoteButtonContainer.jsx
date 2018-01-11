import React, { Component } from 'react';
import { connect } from 'react-redux';
import UpvoteButton from '../components/UpvoteButton'
import { upvoteRecipe } from '../actions/recipeActions'

class UpvoteButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.handleUpvoteBtnClick = this.handleUpvoteBtnClick.bind(this);
    };

    handleUpvoteBtnClick (event) {
        this.props.upvoteRecipe(this.props.recipe.id, this.props.index);
    };
    
    render() {
        return (
            <UpvoteButton 
             handleUpvoteBtnClick={ this.handleUpvoteBtnClick }
             recipe= { this.props.recipe }
             index={ this.props.index } 
             />
        )
    }
}

const mapStateToProps = state => ({
    recipes: state.recipes
});

export default connect( mapStateToProps, {
    upvoteRecipe
})(UpvoteButtonContainer);


