import React, { Component } from 'react';
import CreateRecipeForm from '../components/CreateRecipeForm'
import RecipeDetailsContainer from '../containers/RecipeDetailsContainer';
import Header from '../components/Header';

class RecipeDetailsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <RecipeDetailsContainer id={this.props.params.id}/>
                <div id="create" className="modal">
                    <div className="modal-content">
                    <h4>Create Recipe</h4>
                        <div className="row">
                            <CreateRecipeForm id={this.props.id} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default RecipeDetailsPage;