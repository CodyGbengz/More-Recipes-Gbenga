import React, { Component } from 'react';
import Header from '../components/Header';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import RecipeGrid from  '../containers/RecipeGridContainer';
class RecipesIndex extends Component {
    render() {
        return (
            <div>
                <Header />
                <SearchBoxContainer />
                <RecipeGrid />
            </div>
        );
    }
}

export default RecipesIndex;