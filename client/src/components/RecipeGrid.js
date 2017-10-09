import React, { Component } from 'react';
import Header from './Header';
import Recipe from './Recipe';
import Footer from './Footer';
import CreateRecipeForm from './CreateRecipeForm';

export default class RecipeGrid extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='row'>
            <Recipe/>
            <Recipe/>
            <Recipe/>
            <Recipe/>
            <Recipe/>
            <Recipe/>
            <Recipe/>
            <Recipe/>
        </div>
        <Footer/>
        <div id="create" className="modal">
            <div className="modal-content">
              <h4>Create Recipe</h4>
              <div className="row">
                <CreateRecipeForm />
              </div>
            </div>
          </div>
      </div>
    )
  }
}
