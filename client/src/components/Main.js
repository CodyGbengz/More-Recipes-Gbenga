import React, { Component }from 'react';
import Header from './Header';
import RecipeGrid from './RecipeGrid';

export default class Main extends Component {
    render() {
      return (
        <div>
          <Header/>
          <RecipeGrid/>
        </div>
      )
    }
}

