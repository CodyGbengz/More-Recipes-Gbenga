import React, { Component } from 'react';
import Header from '../components/Header';
import RecipeGrid from  '../containers/RecipeGridContainer';
class RecipesIndex extends Component {
    render() {
        return (
            <div>
                <Header />
                <RecipeGrid />
            </div>
        );
    }
}

export default RecipesIndex;