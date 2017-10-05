import React, { Component } from 'react';
import Header from './Header';
import Recipe from './Recipe';

export default class RecipeGrid extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='row'>
            <Recipe/>
            <Recipe/>
            <Recipe/>
        </div>
      </div>
    )
  }
}
