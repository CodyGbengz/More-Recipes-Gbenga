import  React, { Component } from 'react';
import Recipe from './Recipe';

export default class RecipeGrid extends Component {
  render() {
    return (
      <div>
          <Recipe/>
          <Recipe/>
          <Recipe/>
        
      </div>
    )
  }
}
