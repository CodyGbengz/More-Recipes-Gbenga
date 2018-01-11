import React, { Component } from 'react';
import { connect } from 'react-redux';
import DownvoteButton from '../components/DownvoteButton'
import { downvoteRecipe } from '../actions/recipeActions'

class DownvoteButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.handleDownvoteBtnClick = this.handleDownvoteBtnClick.bind(this);
    };

    handleDownvoteBtnClick(event) {
        this.props.downvoteRecipe(this.props.recipe.id, this.props.index);
    };
    
    render() {
        return (
            <DownvoteButton 
             handleDownvoteBtnClick={ this.handleDownvoteBtnClick }
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
    downvoteRecipe
})(DownvoteButtonContainer);