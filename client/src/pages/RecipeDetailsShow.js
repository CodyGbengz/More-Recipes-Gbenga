import React, { Component } from 'react';
import  Header  from '../components/Header';
import Footer from '../components/Footer';
import RecipeDetailsContainer from '../containers/RecipeDetailsContainer';

class RecipeDetailsPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <RecipeDetailsContainer id={this.props.params.id}/>
                <Footer/>
            </div>

        );
    }
}

export default RecipeDetailsPage;