import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeleteButton from '../components/DeleteButton'
import { deleteSingleRecipe } from '../actions/usersRecipesActions'

class DeleteButtonContainer extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
    };

    handleDeleteBtnClick(event){
        this.props.deleteSingleRecipe(this.props.recipe.id, this.props.index);
    };
    
    render() {
        return (
            <DeleteButton 
             handleDeleteBtnClick={ this.handleDeleteBtnClick }
             recipe= { this.props.recipe }
             index={ this.props.index } 
             />
        )
    }
}

const mapStateToProps = state => ({
    recipes: state.usersrecipes
});

export default connect( mapStateToProps, {
    deleteSingleRecipe
})(DeleteButtonContainer);