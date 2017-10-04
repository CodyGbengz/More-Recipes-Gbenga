import  React, { Component } from 'react';
import Recipe from './Recipe';

export default class RecipeGrid extends Component {
  render() {
    return (
      <div className='row'>
          <Recipe/>
          <Recipe/>
          <Recipe/>
        
      </div>
    )
  }
}
